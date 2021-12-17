const mongoose = require("mongoose")
const Schema = mongoose.Schema
const db = require('../db')
const Mountains = require('../models/Mountains')
const Dogs = require('../models/Dogs')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const mountain = [  
        {name: "Grays Peak",  image: "https://www.uncovercolorado.com/wp-content/uploads/2020/04/grays_and_torreys_peaks-1536x1023.jpg" , location: 'Colorado' ,dogs: ("61bb789504deb2d830a6ce79")},
        {name: "Torreys Peak",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UfQJPPo2pg5H3bsLDY_QOQHaFj%26pid%3DApi&f=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Evans",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GPfkV_6FiHL0CsDitTCZJwHaFj%26pid%3DApi&f=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Longs Peak",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2Fcf0f7f24cba520f91cbe215fe77dd94eb0297c88%2Fc%3D0-286-3000-1974%2Flocal%2F-%2Fmedia%2FFortCollins%2F2014%2F12%2F01%2FB9315330476Z.1_20141201170621_000_G0R99P6B7.1-0.jpg%3Fwidth%3D3200%26height%3D1680%26fit%3Dcrop&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Pikes Peak",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoloradosprings.gov%2Fsites%2Fdefault%2Ffiles%2Fpikes_peak_2_lander_media.jpg&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Bierstadt",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F4kadpeaey7oz.jpg&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Lincoln",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eVs76QqfWM0hd9Aq-PbxvgHaFj%26pid%3DApi&f=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Cameron",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.f6eiWiP6WsKa7rUWCCw7uwHaFj%26pid%3DApi&f=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Bross",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsp-images.summitpost.org%2F339755.JPG%3Fauto%3Dformat%26fit%3Dmax%26ixlib%3Dphp-2.1.1%26q%3D35%26w%3D1024%26s%3D1b8a69d44a83b82302b52e6ca10bbd34&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Democrat",  image: "https://sp-images.summitpost.org/750352.JPG?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=97919a29903a1ed58655e96e4dcf62f8" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Sherman",  image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgraysoncobb.com%2Fwp-content%2Fuploads%2F2016%2F01%2FIMG_7568.jpg&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Elbert",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffree4kwallpapers.com%2Fuploads%2Foriginals%2F2015%2F07%2F20%2Fmount-elbert.jpg&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Massive",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.exploringtherockies.com%2Fwp-content%2Fuploads%2F2010%2F12%2FP1030135-2-1.jpg&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Harvard",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-assets.alltrails.com%2Fuploads%2Fphoto%2Fimage%2F20658269%2Fextra_large_fe4cf14e0cf664a267cd58c6eae22731.jpg&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "La Plata peak",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsp-images.summitpost.org%2F319003.JPG%3Fauto%3Dformat%26fit%3Dmax%26h%3D1000%26ixlib%3Dphp-2.1.1%26q%3D35%26s%3D01c6711676700c07d38ec3841d88c268&f=1&nofb=1" , location: 'Colorado' ,dogs:("61bb789504deb2d830a6ce78")},
        {name: "Mt. Antero",  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb9%2F0a%2F7b%2Fb90a7b87f0a7424a9efe317fc4bd176c.jpg&f=1&nofb=1" , location: 'Colorado' ,dogs: ("61bb789504deb2d830a6ce78")}
        
    ]

    await Mountains.insertMany(mountain)
    console.log("Created some mountains")
}
const run = async () => {
    await main()
    db.close()
}

run()