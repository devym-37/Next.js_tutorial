import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <a>about Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;

// <Link href="/about" title="About page"> 효과가 없음. link 컴포넌트는 href와 같은 일부 props만 받는 HOC(Higher Order Component)이기 때문이다.
