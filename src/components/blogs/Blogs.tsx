import Styled from "./styles";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { useTranslation } from "react-i18next";

interface BlogsItem {
  title: string;
  description: string;
  link: string;
}

interface BlogSection {
  blogsTitle: string;
  blogs: BlogsItem[];
}
const Blogs: React.FC = () => {
  const { t } = useTranslation();
  const blogSection = t("blog", {
    returnObjects: true,
  }) as BlogSection;

  return (
    <Styled.BlogSection id="blogs">
      <Styled.BlogHeading>{blogSection.blogsTitle}</Styled.BlogHeading>
      <Styled.BlogContent>
        {blogSection.blogs.map((blog, id) => {
          return (
            <Styled.BlogCard key={id} href={blog.link} target="_blank">
              <ArrowIcon />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </Styled.BlogCard>
          );
        })}
      </Styled.BlogContent>
    </Styled.BlogSection>
  );
};
export default Blogs;
