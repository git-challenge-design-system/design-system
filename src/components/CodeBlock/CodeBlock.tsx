import { container } from "./CodeBlock.css";

interface CodeBlockProps {
  /** 코드 블록 내부 코드의 내용입니다. 배열 요소별로 줄바꿈이 적용됩니다. */
  code: string[];
  className?: string;
}

/** CodeBlock은 코드 블록의 용도로 사용되는 컴포넌트입니다. 코드 블록 요소 내부에 있는 백틱(``)으로 감싸진 부분에 코드 하이라이팅이 적용됩니다.  */
export function CodeBlock({ code, className = "" }: CodeBlockProps) {
  return (
    <p
      className={[className, container].join(" ").trim()}
      dangerouslySetInnerHTML={{
        __html: toCodeTag(code.join("\n")),
      }}
    />
  );
}

function toCodeTag(code: string) {
  return code.replaceAll(/`(.*?)`/g, "<code>$1</code>");
}
