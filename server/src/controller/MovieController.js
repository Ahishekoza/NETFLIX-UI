import Movies from "../models/Movies.js";

// CREATE 
export const  createMovie =async(req,res)=>{
    if(req.user.isAdmin){
        await Movies.create(req.body)
        .then((movie)=>{
            res.status(200).json({
                Movie:movie
            })
        })
        .catch((err)=>{
            res.status(403).json({
                message:"Unable to create a Movie"
            })
        })
    }else{
        res.status(403).json({
            message:"You are not allowed to create a Movie"
        })
    }
}

// UPDATE
export const updateMovie = async(req,res)=>{
    if(req.user.isAdmin || req.user.id === req.parmas.id ){
        await Movies.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((updatedMovie)=>{
            res.status(200).json({
                message:"Movie Updated Successfully",
                Movie:updatedMovie
            })
        })
        .catch((err)=>{
            res.status(403).json({
                message:"Couldn`t found the movie"
            })
        })
    }else{
        res.status(403).json({
            message:"You are not allowed to create a Movie"
        })
    }
}

// DELETE
export const deleteMovie = async(req,res)=>{
    if(req.user.isAdmin || req.user.id === req.parmas.id ){
        await Movies.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.status(200).json({
                message:"Movie Deleted Successfully",
            })
        })
        .catch((err)=>{
            res.status(403).json({
                message:"Couldn`t found the movie"
            })
        })
    }else{
        res.status(403).json({
            message:"You are not allowed to create a Movie"
        })
    }
}

// GET ALL
export const getAllMovies = async(req,res)=>{

   if(req.user.isAdmin){
    await Movies.find().then((movies)=>{
        res.status(200).json({
            Movies:movies.reverse()
        })
    }).catch((err)=>{
        res.status(403).json({
            message:"Unable To get Movies"
        })
    })
   }
   else{
    res.status(403).json({
        message:"You are permitted to access the movies"
    })
   }

}

// GET BY ID
export const getMovieById = async(req,res)=>{
    await Movies.findById(req.params.id).then((movie)=>{
        res.status(200).json({
            Movie:movie
        })
    }).catch((err)=>{
        res.status(404).json({
            message:"Unable to find Movie"
        })
    })
}

// GET RANDOM 
export const getRandom = async(req,res)=>{
    const type =  req.query.type
    let movie;
    if(type === "series"){
        movie = await Movies.aggregate([
            {$match:{isSeries:true}},
            {$sample:{size:1}}
        ])
    }
    else{
        movie = await Movies.aggregate([
            {$match:{isSeries:false}},
            {$sample:{size:1}}
        ])
    }
    res.status(200).json(movie)
}