const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    //get all inputs
    const bucketName = core.getInput('bucket-name', { required: true })
    const bucketRegion = core.getInput('bucket-region', { required: true })
    const folder = core.getInput('dist-folder', { required: true })


    //upload files
    exec.exec(`echo "uploading ${folder} to ${bucketRegion}/${bucketName}" ...`)

    const ak = process.env.AWS_ACCESS_KEY
    const sk = process.env.AWS_SECURITY_KEY

    exec.exec(`echo "${ak} : ${sk}"`)

    core.notice('hello from my javascript action !!!')

}

run();