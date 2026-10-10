import { JSONValue } from "@/types/JSONValue";

function Code(input: JSONValue) {
  return (
    <pre className="whitespace-pre-wrap max-w-full">
      <code className="font-mono text-sm">
        {JSON.stringify(input, null, 2)}
      </code>
    </pre>
  );
}

export default Code;
