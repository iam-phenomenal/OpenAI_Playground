require("dotenv").config()

const {Configuration, OpenAIApi} = require("openai")
const {generateDomainName} = require("../controller/generateRequests")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

const domainName = async(req, res)=>{
    if(!configuration.apiKey){
        return res.status(500).json({
            error: {
                message: "Missing OpenAI API key"
            }
        })
    }
    const refName = req.body["preferredName"]
    if(refName.length === 0){
        return res.status(400).json({
            error:{
                messsage: "Please enter a reference domain name"
            }
        })
    }

    try{
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generateDomainName(refName),
            temperature: 0.6,
            max_tokens: 100
        })
        console.log(completion.data.choices)
        const result = completion.data.choices[0].text
        return res.status(200).json({result: result})
    }catch(err){
        return res.status(500).json({
            error:{
                message: err.message
            }
        })
    }
}

module.exports = {domainName}