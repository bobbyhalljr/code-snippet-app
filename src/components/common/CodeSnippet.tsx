import React from 'react';

interface CodeSnippetCardProps {
    snippet: any;
}

const CodeSnippetCard = ({ snippet }: CodeSnippetCardProps) => (
  <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-6">
    <img className="w-full h-32 object-cover mb-4" src={snippet.image} alt={snippet.title} />
    <h2 className="text-xl font-semibold mb-2">{snippet.title}</h2>
    <div className="flex items-center mb-4">
      <img className="w-8 h-8 rounded-full mr-2" src={snippet.userImage} alt="User" />
      <p className="text-gray-600">{snippet.userBio}</p>
    </div>
    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
      <code>{snippet.codePreview}</code>
    </pre>
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <p className="mr-2">{`Rating: ${snippet.rating}/5`}</p>
        <p>{`Reviews: ${snippet.totalReviews}`}</p>
      </div>
      <div className="flex space-x-2">
        {snippet.tags.map((tag: string, index: number) => (
          <span key={index} className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// const App = () => (
//   <div className="container mx-auto p-6">
//     <h1 className="text-3xl font-semibold mb-6">Code Snippets</h1>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {codeSnippets.map((snippet, index) => (
//         <CodeSnippetCard key={index} snippet={snippet} />
//       ))}
//     </div>
//   </div>
// );

export default CodeSnippetCard;
