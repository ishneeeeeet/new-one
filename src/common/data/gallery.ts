import img1 from "../../assets/images/small/freeform-shnier.jpg";
import img3 from "../../assets/images/small/invasion.jpg";
import img4 from "../../assets/images/small/tiles.jpg";
import img5 from "../../assets/images/small/Pirate_chest.jpg";
import img6 from "../../assets/images/small/hardwood.jpg";
import img7 from "../../assets/images/small/wall-tile.jpg";


interface GalleryProps {
    id : number;
    title : string;
    author : string;
    category: Array<any>;
    image: string
}

const GalleryData : Array<GalleryProps> = [
    {
        id: 1,
        title: "Freeform",
        author: "Schnier",
        category: ["carpet"],
        image: img1
    },
    {
        id: 2,
        title: "Wall Tile",
        author: "Home Idol",
        category: ["tiles"],
        image: img7
    },
    {
        id: 3,
        title: "Magnolia Place",
        author: "Mohawk",
        category: ["carpet"],
        image: img5
    },
    {
        id: 4,
        title: "Hardwood",
        author: "Kraus",
        category: ["hardwood"],
        image: img6
    },
    {
        id: 5,
        title: "Titanium",
        author: "Taiga",
        category: ["laminate"],
        image: img4
    },
    {
        id: 6,
        title: "Invasion",
        author: "Bealieu",
        category: ["carpet"],
        image: img3
    }
];

export { GalleryData };