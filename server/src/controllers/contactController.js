import mongoose from "mongoose";
import { ContactSubmission } from "../models/Contact.js";

export const createContact = async (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const isMongoConnected = mongoose.connection.readyState === 1;

  if (!isMongoConnected) {
    console.warn("[RC SOFTWARE LABS] Contact submission skipped - MongoDB not connected.");
    return res.status(202).json({
      message:
        "Submission received locally. Configure MONGODB_URI to persist data.",
      payload: { name, email, company, message }
    });
  }

  try {
    const submission = new ContactSubmission({ name, email, company, message });
    await submission.save();
    res.status(201).json({ message: "Thanks for reaching out!", submission });
  } catch (error) {
    console.error("[RC SOFTWARE LABS] Failed to save contact", error.message);
    res.status(500).json({ error: "Unable to save your message right now." });
  }
};
