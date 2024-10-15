import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
      <Card title="Featured" description="This is a featured section." />
      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
    </div>
  );
};

export default Home;
