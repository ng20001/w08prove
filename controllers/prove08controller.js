exports.getPosts = (req, res, next) => {
    res.status(200).json({
        professionalName: 'Nagato Yuki',
        base64Image: 'www.anImageUrlHere.com',
        nameLink: {
            firstName: 'Nagato',
            url: 'www.aURLHereTest.com'
        },
        primaryDescription: ' (Primary Description here)',
        workDescription1: '(Work Description1 here)',
        workDescription2: '(Work Description2 here)',
        linkTitleText: 'Contact me',
        linkedInLink: {
            text: '(LinkedIn Link Here)',
            link: 'www.linkedInLinkHere.com'
        },
        githubLink: {
            text: '(GitHub Link here)',
            link: 'www.githubLinkHere.com'
        }
    });
};

// exports.createPost = (req, res, next) => {
//     const title = req.body.title;
//     const content = req.body.content;
//     // Create post in db
//     res.status(201).json({
//         message: 'Post created',
//         post: {id: new Date().toISOString(), title: title, content: content }
//     });
// }