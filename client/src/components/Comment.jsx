import Image from "./Image"

const Comment = () => {
    return (
        <div className='p-4 bg-state-50 rounded-xl mb-8'>
            <div className="flex items-center gap-4">
                <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
                <span className="font-medium">Celine Does</span>
                <span className="text-sm text-gray-500">2 Days ago</span>

            </div>
            <div className="mt-4"> 
                <p>
                "J'adore la façon dont cet article met en lumière l'importance du design web au-delà de l'esthétique. L'accent sur l'expérience utilisateur, le responsive design, et l'accessibilité est tellement pertinent aujourd'hui. Il est vrai qu'un bon design ne se résume pas à des couleurs et des formes, mais à la manière dont il guide l'utilisateur tout en étant fonctionnel. Un très bon article qui résume bien l'essence du Web Design moderne ! 👏"
                </p>
            </div>
        </div>
    )
}

export default Comment