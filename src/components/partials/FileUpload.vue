<template>
    <el-upload
            action=""
            ref="fileUploader"
            :file-list="fileList"
            :before-upload="handleUpload"
    >
        <slot></slot>
    </el-upload>
</template>

<script>
    import EditorModel from '../../models/Editor'

    export default {
        data () {
            return {
                fileList: [],
                acceptedTypes: [
                    'text/plain',
                    'text/json',
                    'application/json'
                ]
            }
        },
        methods: {
            handleUpload: function(file) {
                if (this.acceptedTypes.indexOf(file.type) === -1)
                    return

                const f = new FileReader()
                f.readAsBinaryString(file)
                f.onload = (function() {
                    this.parseFile(f.result)
                }).bind(this)
                return false
            },

            parseFile: function(str) {
                try {
                    const json = JSON.parse(str.trim())
                    if (null === json || (typeof json) !== 'object') {
                        throw new Error(`Invalid file uploaded`)
                    }
                    console.log(json)
                    EditorModel.newGoal(json, true)
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>
