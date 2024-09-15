/* eslint-disable no-undef */
const Faq = require('../models/faq');

exports.getFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.json(faqs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getFaq = async (req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        res.json(faq);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

exports.createFaq = async (req, res) => {
    try {
        const faq = new Faq({
            question: req.body.question,
            answer: req.body.answer
        });
        await faq.save();
        res.json(faq);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateFaq = async (req, res) => {
    try {
        const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(faq);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

exports.deleteFaq = async (req, res) => {
    try {
        await Faq.findByIdAndRemove(req.params.id);
        res.json({ message: 'Faq deleted successfully' });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};