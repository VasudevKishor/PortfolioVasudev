import React from "react";
import "./ProjectsGrid.css";

const projects = [
  {
    title: "AI Wellness Assistant for Automobile Integration (Ongoing)",
    description: "Building an in-vehicle AI system to detect stress, drowsiness, and sleep patterns.",
    details: "Incorporates real-time music pattern analysis and ambient temperature monitoring for personalized wellness responses. Tech Used: Python, TensorFlow Lite, Android (Java/Kotlin), OpenCV, Scikit-learn, NumPy, Pandas, Real-time Sensor APIs, Machine Learning (Random Forest, LSTM), On-device Inference, Edge Computing.",
  },
  {
    title: "Operations & Management Portal for a private Tech company (Ongoing)",
    description: "A full-stack web platform for managing digital resource register, event coordination,Budget planning and Meeting scheduling.",
    details: "Features an admin portal for event coordination, centralized messaging, and budgeting. Built with Flask (Backend), React.js, MySQL, REST APIs, Axios, JavaScript, Python, FullCalendar, Tailwind CSS, Bootstrap.",
  },
  {
    title: "Fraud Detection using Machine Learning",
    description: "Research project on detecting fraud using machine learning.",
    details: "Working on bank account fraud detection using the BAF dataset. Implementing ML models like Decision Trees, Random Forests, and Neural Networks to enhance detection accuracy. Using Python, Scikit-learn, and TensorFlow.",
  },
  {
    title: "Efficient Text Editor using Rope and Piece Table",
    description: "Developing a text editor using Tkinter and efficient data structures.",
    details: "Focus on fast insertions, deletions, and undo/redo operations using Rope and Piece Table. Implemented file handling, status bar, and event-driven interactions. Built with Python.",
  },
  {
    title: "Compiler Development using C",
    description: "Developing a compiler focusing on lexical analysis and code generation.",
    details: "Currently implementing the tokenizer (lexical analyzer) and researching parsing techniques for syntax analysis and AST generation. Exploring semantic analysis and code generation for optimized execution.",
  },
  {
    title: "Malicious Node Detection Using Machine Learning",
    description: "Detecting malicious nodes in networks using machine learning.",
    details: "Built a system using logistic regression to detect malicious network nodes. Integrated feature engineering and anomaly detection techniques. Analyzed network behavior metrics such as traffic ratio, anomaly scores, and trust levels.",
  },
  {
    title: "Coconut Tree Detection Using Deep Learning Models",
    description: "Developing deep learning models for coconut tree detection from aerial images.",
    details: "Working on object detection using models like RetinaNet, YOLOv5, and VarifocalNet. Developed datasets from high-resolution UAV images and low-resolution Google Earth images. Using TensorFlow and PyTorch for model training.",
  },
  {
    title: "DevOps Assistant Bot (Ongoing)",
    description: "Automated assistant for DevOps tasks and documentation.",
    details: "Uses Python and LangChain to assist in automating CI/CD setup, generating infra-as-code, and responding to commands.",
  },
  {
    title: "AI-Powered Stock Market Predictor",
    description: "Developing an AI model to predict stock market trends.",
    details: "Using historical stock data and machine learning algorithms to forecast stock prices. Tech Used: Python, TensorFlow, Keras, Scikit-learn, Pandas, NumPy, Matplotlib, Yahoo Finance API, LSTM (Long Short-Term Memory) Networks, Time Series Analysis. The AI-Powered Stock Market Predictor collects historical stock data using the Yahoo Finance API and implements time series forecasting techniques, primarily leveraging LSTM (Long Short-Term Memory) networks for price prediction. It evaluates model accuracy using metrics like RMSE (Root Mean Squared Error) and visualizes prediction results and market trends using Matplotlib and Plotly. The system offers the ability to predict future stock prices based on past performance and includes real-time prediction updates, helping users analyze stock trends. This tool can be used to forecast the performance of various companies, making it a valuable resource for investors and traders.",
  },
  {
  title: "Heart Disease Risk Classifier",
  description: "A machine learning-based system to classify heart disease risk levels.",
  details:
    "This project utilizes machine learning models to classify the risk level of heart disease based on medical attributes. Tech Used: Python, Scikit-learn, PyTorch, Pandas, NumPy, Matplotlib, Seaborn. The system evaluates and compares the performance of multiple models including Decision Tree, Random Forest, Support Vector Machine (SVM), and a custom Binary Neural Network (BNN) built using PyTorch. The project includes data preprocessing with StandardScaler, model training and evaluation using metrics such as accuracy, precision, recall, F1-score, and ROC-AUC. Confusion matrices are visualized using Seaborn, and results are exported to text and image files for documentation. This tool aids in identifying patients at higher risk of heart disease and demonstrates the practical application of ML in healthcare diagnostics.",
  },
  {
  title: "Arduino Quiz Game System",
  description: "An interactive hardware-based quiz system using Arduino, LCD, buttons, LEDs, and buzzer.",
  details:
    "This project implements a hardware-driven multiple-choice quiz game using an Arduino Uno. Tech Used: Arduino C++, LiquidCrystal library, piezo buzzer, LEDs, push buttons. The system features a 16x2 LCD to display scrolling questions and options, with input captured via four buttons (A–D). Correct answers trigger a green LED and short buzzer beep, while incorrect answers activate a red LED and a longer buzz. A series of predefined questions are stored in memory, and the final score is displayed at the end of the quiz. Core functionality includes text scrolling, button polling, and real-time feedback via digital outputs. This project demonstrates embedded system programming and user interaction through minimal hardware components."
  },
  {
  title: "Aho-Corasick Plagiarism Detector",
  description: "A fast multi-pattern string matching tool for detecting textual plagiarism.",
  details:
    "This project implements a plagiarism detection tool using the Aho-Corasick algorithm, optimized for fast and efficient multi-pattern string matching. Tech Used: C++, Aho-Corasick Automaton, File I/O. The system scans large documents against a repository of known phrases or source texts and identifies overlapping or copied content by building a trie-based automaton that enables simultaneous pattern searching in linear time. It includes features like keyword preprocessing, match highlighting, and similarity percentage calculation. Ideal for academic or document integrity use-cases, this project showcases algorithmic efficiency and real-time text analysis capabilities in a compiled language environment."
  },
  {
  title: "Contributor for IIC Amrita Website",
  description: "Contributor and Web Dev lead for official website for the Institution’s Innovation Council at Amrita Vishwa Vidyapeetham.",
  details:
    "This project is a dynamic and responsive website developed for the Institution's Innovation Council (IIC) at Amrita Vishwa Vidyapeetham, Coimbatore. Tech Used: React, HTML, CSS, JavaScript, Bootstrap. The website showcases the council’s vision, mission, events, team, and initiatives in fostering innovation and entrepreneurship among students. It features interactive UI components, responsive design for mobile and desktop, and structured content sections for announcements, event galleries, and contact information. The project reflects strong web design fundamentals and supports institutional branding and outreach."
  },
  {
  title: "Contributor for A-MUNSO Website",
  description: "Contributor and Web Dev lead for official website for the Amrita MUN ( A-MUN'25 organised by A-MUNSO).",
  details:
    "This project is a professional and responsive website developed for the Amrita Model United Nations Society (A-MUNSO) at Amrita Vishwa Vidyapeetham, Coimbatore. Tech Used: HTML, CSS, JavaScript, Bootstrap. The site features sections introducing the MUN society, its team, events, past conferences, and registration details. With a clean UI/UX and well-structured navigation, the platform aims to promote MUN culture among students, streamline participation processes, and increase outreach for upcoming sessions. The design emphasizes institutional branding while maintaining accessibility across devices."
  },
  {
  title: "FreeRTOS-based Arduino Project",
  description: "Multiple FreeRTOS-based tasks for resource management, synchronization, and event-driven operations on Arduino.",
  details: 
    "This project demonstrates various FreeRTOS features for task scheduling, synchronization, and event handling on Arduino. It includes multiple tasks like resource management using semaphores, producer-consumer scenarios, mutex locking (both regular and recursive), event groups for inter-task signaling, and handling button presses to toggle LEDs. Tasks are created to simulate work with shared resources, and synchronization is achieved using FreeRTOS's semaphore and queue functionalities. The project aims to showcase how FreeRTOS can help organize complex multi-tasking and real-time operations efficiently on microcontrollers."
  }




];

const ProjectsGrid = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-hover-box">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-details">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
