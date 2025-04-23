import { Link, useParams } from "react-router-dom"
import Image from "../components/Image"
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const fetchPost= async (slug) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
    return res.data;
};

const SinglePostPage = () => {

    const {slug} = useParams();

    const {isPending, error, data} = useQuery({
        queryKey:["post",slug],
        queryFn:()=>fetchPost(slug),
    });

    if(isPending) return "loading...";
    if(error) return "Something went wrong..."+ error.message;
    if(!data) return "Post not Found!";

    return (
        <div className='flex flex-col gap-8'>
            {/*details*/}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        {data.title}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                    <Link className="text-blue-800">{data.user.username}</Link>
                        <span>on</span>
                        <Link className="text-blue-800">{data.category}</Link>
                        <span> {format(data.createdAt)}</span>
                    </div> 
                    <p className="text-gray-500 font-medium"> {data.desc}</p>
                </div>
                {data.img && <div className="hidden lg:block w-2/5">
                    <Image src={data.img} w="600" className="rounded-2xl"/>
                </div>}
            </div>
             {/*content*/}
             <div className="flex flex-col md:flex-row gap-12">
             {/*text*/}
             <div className="lg:text-lg flex flex-col gap-6 text-justify">
                <p>Quand on parle de Web Design, beaucoup imaginent seulement l’apparence d’un site : les couleurs, les polices, les images… Bref, tout ce qui saute aux yeux. C’est vrai, l’aspect visuel joue un rôle important. Mais limiter le design à ça, c’est passer à côté de ce qui fait vraiment la force d’un bon site web.</p>
                <p>Le design web, c’est avant tout une question d’expérience utilisateur. Il guide le visiteur, rend la navigation fluide et intuitive, et l’aide à trouver rapidement ce qu’il cherche. Un bon design anticipe les besoins, réduit les frustrations, et crée une interaction naturelle entre l’utilisateur et le site. C’est cette fluidité qui garde les visiteurs plus longtemps… et qui les fait revenir.</p>
                <p>Il y a aussi une dimension technique souvent négligée : un design bien structuré améliore les performances du site. Il allège les pages, réduit les temps de chargement, et joue un rôle essentiel dans le référencement naturel (SEO). Sans parler de l’accessibilité, qui permet à tous les utilisateurs, y compris ceux en situation de handicap, de naviguer facilement.</p>
                <p>En outre, un aspect essentiel du Web Design est la consistance. Cela ne signifie pas seulement utiliser les mêmes couleurs ou polices partout, mais aussi établir une hiérarchie visuelle claire. Les éléments doivent être disposés de manière logique pour que l’utilisateur puisse comprendre facilement l’importance relative de chaque section du site. Par exemple, un bouton d’appel à l’action (CTA) bien placé, avec une couleur contrastée, incite à l’interaction et guide l’utilisateur vers l’étape suivante.</p>
                <p>Le responsive design, ou design adaptable, est aussi crucial dans l’époque actuelle. Avec l’augmentation de l’utilisation des smartphones et tablettes pour naviguer sur Internet, il est devenu indispensable que les sites soient optimisés pour toutes les tailles d’écrans. Un bon design web doit donc être flexible, en s’adaptant à différentes résolutions sans compromettre l’expérience utilisateur. Ce type de conception assure une navigation fluide, que ce soit sur un grand écran de bureau ou un petit écran de smartphone.</p>
                <p>Un autre aspect clé du design web est la psychologie des utilisateurs. Chaque choix de couleur, de disposition ou de forme peut influencer les émotions et les comportements des visiteurs. Par exemple, des couleurs chaudes peuvent susciter des sentiments d’urgence ou de convivialité, tandis que des couleurs froides peuvent transmettre la confiance et la sérénité. Un bon designer sait jouer avec ces éléments pour guider les utilisateurs dans leur parcours sur le site.</p>
                <p>Enfin, dans un monde numérique en constante évolution, il est essentiel de mettre à jour régulièrement le design d’un site. Un site qui reste statique peut rapidement devenir obsolète et perdre de son efficacité. Les tendances en matière de design web évoluent, tout comme les technologies et les attentes des utilisateurs. Rester à jour avec les nouvelles pratiques permet non seulement de maintenir une interface moderne, mais aussi d'améliorer constamment l'expérience utilisateur.</p>
                <p>En résumé, le Web Design ne se résume pas à “faire beau”. C’est un véritable pilier de tout projet web réussi. Il combine esthétique, logique, performance et accessibilité. Un bon design, ce n’est pas juste une belle vitrine : c’est une expérience pensée pour l’utilisateur, au service de l’efficacité.</p>
                <p> </p>
             </div>
             {/*menu*/}
             <div className="px-4 h-max sticky top-8">
             < h1 className="mb-8 mb-4 text-sm font-medium">Author</h1>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-8">
                {data.user.img && <Image src={data.user.img} className="w-12 h-12 rounded-full object-cover"
                w="48" h="48"/>}
                <Link className="text-blue-800">{data.user.username}</Link>
                </div>
                <p className="text-sm text-gray-500">Designer web, je partage ici ma vision d’un design à la fois esthétique, fonctionnel et centré sur l’utilisateur.</p>
                <div className="flex gap-2">
                    <Link>
                    <Image src="facebook.svg"/>
                    </Link>
                    <Link> 
                    <Image src="instagram.svg"/>
                    </Link>
             </div>
            </div>
             
             <PostMenuActions post={data}/>
             <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
             <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">Web Design</Link>
            <Link className="underline" to="/">Development</Link>
            <Link className="underline" to="/">Databases</Link>
            <Link className="underline" to="/">Search Engine</Link>
            <Link className="underline" to="/">Markiting</Link>
             </div>
             <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
             <Search/>
             </div>
         </div>
         <Comments postId={data._id}/>
        </div>
    );
};

export default SinglePostPage 