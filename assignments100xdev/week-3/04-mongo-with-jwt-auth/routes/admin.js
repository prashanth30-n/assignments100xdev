const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.name;
    const password=req.body.password;
    const newadmin= {
        username,
        password
    };
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })

    

    
});

router.post('/signin', async(req, res) => {
    const username=req.body.username;
    const password=req.body.password;
    const newadmin={
        username,
        password
    }
     const user = await user.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
    // Implement admin signup logic

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.desceription;
    const imagelink=req.body.imagelink;
    const price=req.body.price;
    const newcourse={
        title,
        description,
        imagelink,
        price
    }
    await Course.create({
        newcourse
    })
    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // fetching all courses logic
    const response=await Course.find({});
    res.json({
        courses:response
    })

});

module.exports = router;