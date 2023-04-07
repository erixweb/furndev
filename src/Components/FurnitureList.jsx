import Heart from "../assets/Heart"
import Redirect from "../assets/Redirect"
import furniture from "../store"


export default function FurnitureList(props) {

    const { filter } = props


    let filterFurniture = ""
    if (filter !== "") {
        filterFurniture = furniture.filter(r => r.desc.toLowerCase().includes(filter.toLowerCase()) || r.name.toLowerCase().includes(filter.toLowerCase()))
    }

    return (
        <section className="furniture-wrap">
            {filterFurniture == "" ?
                furniture.map(item => (
                    <article id={item.id}>
                        <img src={item.image} alt={`Imagen del mueble ${item.name}`} />
                        <div className="content">
                            <h2>{item.name}</h2>
                            <small>
                                {item.price}
                            </small>
                            <p>
                                {item.desc}
                            </p>
                            <Heart />
                            <button type="button">
                                <Redirect />
                            </button>   
                        </div>
                    </article>
                ))
                :
                furniture.filter(r => r.desc.toLowerCase().includes(filter.toLowerCase()) || r.name.toLowerCase().includes(filter.toLowerCase())).map(item => (
                    <article id={item.id}>
                        <img src={item.image} alt={`Imagen del mueble ${item.name}`} />
                        <div className="content">
                            <h2>{item.name}</h2>
                            <small>
                                {item.price}
                            </small>
                            <p>
                                {item.desc}
                            </p>
                            <Heart /> 
                            <button type="button">
                                <Redirect />
                            </button>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}