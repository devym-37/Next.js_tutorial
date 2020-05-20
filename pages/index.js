import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}

// <Link href="/about" title="About page"> 효과가 없음. link 컴포넌트는 href와 같은 일부 props만 받는 HOC(Higher Order Component)이기 때문이다.
