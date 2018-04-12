import mongoose from 'mongoose';
import {ContactSchema } from '../models/crmModel'

export const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    })
};

export const getContacts = (req, resp) => {
    Contact.find({}, (err, contact) => {
        if(err) {
            resp.send(err);
        } else {
            resp.json(contact);
        }
    });
}; 


export const getContactWithId = (req, resp) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if(err) {
            resp.send(err);
        } else {
            resp.json(contact);
        }
    });
}

export const updateContact = (req, resp) => {
    Contact.findOneAndUpdate({ _id : req.params.contactId }, req.body, {new :  true}, (err, contact) => {
        if(err) {
            resp.send(err);
        } else {
            resp.json(contact);
        }
    });
}
export const deleteContact = (req, resp) => {
    Contact.remove({ _id : req.params.contactId }, (err, contact) => {
        if(err) {
            resp.send(err);
        } else {
            resp.json({message : "Successfully delted contact"});
        }
    });
}