import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-8'>
            {/*image */}
            <div className="md:hidden xl:block xl:w-1/3">
              <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
            </div>
             {/*details */}
             <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">Pourquoi le Web Design est plus qu’un simple look</Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link className="text-blue-800">John Doe</Link>
                    <span>on</span>
                    <Link className="text-blue-800">Web Design</Link>
                    <span> 3 days ago</span>
                </div>
                <p>
                Quand on parle de Web Design, beaucoup pensent uniquement à l'apparence d’un site. Mais en réalité, le design web va bien au-delà du style : il influence l’expérience utilisateur, la navigation, l’accessibilité et même les performances du site. Dans cet article, je partage pourquoi un bon design ne se résume pas à l’esthétique, mais joue un rôle central dans la réussite d’un projet web.
                </p>
                <Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>
             </div>
        </div>

        
    );
    
};

export default PostListItem
