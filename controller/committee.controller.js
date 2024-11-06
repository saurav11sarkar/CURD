const Committee = require("../models/committee.model")

const postCommittee = async (req, res) => {
    try {
        const newCommittee = new Committee({
            name: req.body.name,
            designation: req.body.designation,
            address: req.body.address,
            mobile: req.body.mobile
        })
        await newCommittee.save();
        res.status(201).json(newCommittee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllCommittee = async (req, res) => {
    try {
        const allCommittee = await Committee.find();
        res.status(200).json(allCommittee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneCommittee = async (req, res) => {
    try {
        const oneCommittee = await Committee.findById(req.params.id)
        res.status(200).json(oneCommittee);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const putCommittee = async (req, res) => {
    try {
        const updateCommittee = await Committee.findById(req.params.id);
        updateCommittee.name = req.body.name;
        updateCommittee.designation = req.body.designation;
        updateCommittee.address = req.body.address;
        updateCommittee.mobile = req.body.mobile;
        await updateCommittee.save();
        res.status(201).json({
            message: "Update is successfully",
            updateCommittee
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteCommittee = async (req, res) => {
    try {
        const oneCommittee = await Committee.findByIdAndDelete(req.params.id)
        res.status(203).json({
            message: "delete is successfully",
            oneCommittee
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { postCommittee, getAllCommittee, getOneCommittee, putCommittee, deleteCommittee }