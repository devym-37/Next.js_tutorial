import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </>
  );
}

// <Link href="/about" title="About page"> 효과가 없음. link 컴포넌트는 href와 같은 일부 props만 받는 HOC(Higher Order Component)이기 때문이다.
// as={ } 브라우저 URL에 보여질 URL
