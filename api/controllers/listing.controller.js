import Listing from "../models/listing.models.js";


export const createListing = async (req, res, next) =>{
    try{
        const listing = await Listing.create(req.body);
        res.status(201).send(listing);
    }catch(err){
        next(err);
    
    }
}