const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Sample technical talks data
const talks = [
  {
    id: 1,
    title: "The Future of AI in Cloud Native Environments",
    speakers: ["Alice Johnson", "Bob Smith"],
    categories: ["AI", "Cloud Native", "Kubernetes"],
    duration: "60 min",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    description: "Explore how AI is being integrated into modern cloud-native architectures and what the future holds for automated infrastructure management."
  },
  {
    id: 2,
    title: "Rust: Why It's Changing the Way We Build Systems",
    speakers: ["Charlie Lee"],
    categories: ["Rust", "Systems Programming"],
    duration: "60 min",
    startTime: "11:10 AM",
    endTime: "12:10 PM",
    description: "A deep dive into the safety and performance benefits of Rust and why major tech companies are adopting it for their core infrastructure."
  },
  {
    id: 3,
    title: "Securing Your JavaScript Applications: Beyond the Basics",
    speakers: ["David Kim", "Eva Green"],
    categories: ["Security", "JavaScript", "Web Development"],
    duration: "60 min",
    startTime: "12:20 PM",
    endTime: "13:20 PM",
    description: "Learn about the latest security threats targeting JavaScript applications and practical ways to protect your code beyond simple input validation."
  },
  {
    id: 4,
    title: "Zero Trust Architecture: Implementing it in Real World",
    speakers: ["Frank White"],
    categories: ["Security", "Network Architecture"],
    duration: "60 min",
    startTime: "14:30 PM",
    endTime: "15:30 PM",
    description: "Transitioning to a Zero Trust model can be challenging. This talk provides a practical roadmap for organizations of all sizes."
  },
  {
    id: 5,
    title: "Micro-Frontends: Building Scalable Web Apps",
    speakers: ["Grace Hopper"],
    categories: ["Web Development", "Microservices"],
    duration: "60 min",
    startTime: "15:40 PM",
    endTime: "16:40 PM",
    description: "Breaking down monolithic frontend applications into smaller, more manageable micro-frontends can improve development velocity and scalability."
  },
  {
    id: 6,
    title: "Data Streaming with Apache Kafka",
    speakers: ["Henry Ford", "Ivy Chan"],
    categories: ["Data Engineering", "Real-time Systems"],
    duration: "60 min",
    startTime: "16:50 PM",
    endTime: "17:50 PM",
    description: "An overview of real-time data streaming patterns and how to build high-throughput, low-latency systems with Apache Kafka."
  },
  {
    id: 7,
    title: "Cadence Palladium",
    speakers: ["Seung-Hun"],
    categories: ["Emulatoration", "Hardware Aaccelleration"],
    duration: "60 min",
    startTime: "18:00 PM",
    endTime: "18:50 PM",
    description: "An overview of real-time data streaming patterns and how to build high-throughput, low-latency systems with Apache Kafka."
  }
];

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get all talks
app.get('/api/talks', (req, res) => {
  res.json(talks);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
