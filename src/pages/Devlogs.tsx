import React from 'react';

// For a synchronous (eager) import:
const modules = import.meta.glob('./components/Devlogs/createdDevlogs*.tsx', { eager: true });

// "modules" is now an object keyed by file path, whose values
// are each the module’s exports. Something like:
// {
//   './devlog/Devlog1.tsx': { default: [Function Devlog1], ... },
//   './devlog/Devlog2.tsx': { default: [Function Devlog2], ... }
// }

const Devlogs: React.FC = () => {
  // Convert the modules object into an array of [path, module]
  const devlogEntries = Object.entries(modules);

  return (
    <div>
      <h1>All Devlogs</h1>
      {devlogEntries.map(([path, module]) => {
        // We assume each devlog file exports a React component as default
        const DevlogComponent = (module as any).default;
        return <DevlogComponent key={path} />;
      })}
    </div>
  );
};

export default Devlogs;
