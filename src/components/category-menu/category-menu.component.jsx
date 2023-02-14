import './category-menu.styles.scss'
import CategoryItem from '../category-item/category-item.component'

const CategoryMenu = ({categories}) => {

    return (
        <div className='category-menu-container'>
            {categories.map(({id, title, imageUrl}) => (
                
                <CategoryItem 
                key={id} 
                title = {title} 
                imageUrl = {imageUrl} />

            ))}
            
        
        </div>
    )
}

export default CategoryMenu