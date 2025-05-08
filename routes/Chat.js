const Sms = require('../models/Sms')
const Chat = require("../models/Chat")

const router = require('express').Router()

// Chat Config
router.get("/chat/:id", async (req, res) => {
    try {
        const newUser = await Chat.findById(req.params.id);
        res.status(200).json(newUser)
    } catch (err) {
        res.status(404).json(err)
    }
})

router.get("/chats/:id", async (req, res) => {
    try {
            const result = await Chat.aggregate(
                [
                    {
                        $search: {
                            index: "chats",
                            text: {
                                query: req.params.id,
                                path: {
                                    wildcard: "*"
                                }
                            }
                        }
                    }
                ]
            )
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json("Failed to get the Product")
        }
})

router.get("/getchat", async (req, res) => {
    const body = [req.headers.id, req.headers.idd]
    const body2 = [req.headers.idd, req.headers.id]
    const status = true;
    try {
        const newChat = await Chat.find({ users: body });
        const newChatt = await Chat.find({ users: body2 });

        console.log(newChat)
        console.log(newChatt)

        if (newChat.length === 0 && newChatt.length === 0) res.status(200).json(true)
        if (newChat.length !== 0 || newChatt.length !== 0) res.status(200).json(false)

        // if(newChat.length !== 0 || newChatt.length  !== 0){
        //     res.status(200).json(status)
        // }else{
        //     status = false;
        //     res.status(200).json(status)
        // }
    } catch (err) {
        console.log(err.message)
    }
})

router.get("/match/:id", async (req, res) => {
    const whoId = req.params.id
    const userid = req.headers.userid

    var newChat = null;
    try {
        const chatBody = new Chat({
            users: [whoId, userid]
        })
        newChat = await chatBody.save()
        res.status(200).json(newChat)
    } catch (err) {
        res.status(404).json("{message: err.message}")
    }


})


// Messages Configs

router.get("/", async (req, res) => {
    try {
        const allSms = await Sms.find()
        res.status(200).json(allSms)
    } catch (error) {
        res.status(200).json(error)
    }
})
router.get("/sme/:id", async (req, res) => {
    try {
        const allSms = await Sms.find({ chatId: req.params.id })
        res.status(200).json(allSms)
    } catch (error) {
        res.status(200).json(error)
    }
})
router.post("/sme", async (req, res) => {
    const objectSms = new Sms({
        sms: req.body.sms,
        author: req.body.author,
        chatId: req.body.chatId
    })
    try {
        const newSms = await objectSms.save()
        res.status(200).json(newSms)
    } catch (error) {
        res.status(200).json(error)
    }
})
router.put("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const newSms = await Sms.findByIdAndUpdate(id, {
            sms: req.body.sms
        })
        res.status(200).json(newSms)
    } catch (error) {
        res.status(200).json(error)
    }
})
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try {
        await Sms.findByIdAndDelete(id)
        res.status(200).json("Deletado com sucesso!")
    } catch (error) {
        res.status(200).json(error)
    }
})

module.exports = router;