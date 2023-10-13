import Styled from './styles'
import { blogs } from '../../userData'
import ArrowIcon from '../../assets/icons/ArrowIcon'

const Blogs = () => {

    return (
        <Styled.BlogSection id="blogs">
            <Styled.BlogHeading>Blogs✍️</Styled.BlogHeading>
            <Styled.BlogContent>
                {
                    blogs.map((blog, id) => {
                        return (
                            <Styled.BlogCard href={blog.link} target="_blank"> 
                                <ArrowIcon />
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                            </Styled.BlogCard>
                        )
                    })
                }
            </Styled.BlogContent>
        </Styled.BlogSection>
    )
}
export default Blogs;