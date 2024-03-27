// App.js
import React, { useState } from 'react';
import './App.css';
import linkedlist from './data/linkedlist';
import gettingStarted from './data/gettingStarted';
import genericTree from './data/genericTree';
import binaryTree from './data/binaryTree';
import BST from './data/BST';
import pointer from './data/2pointerAndliding';
import heap from './data/heap';
import HashMap from './data/HashMap';
import dp from './data/dp';
import graph from './data/graph';
import sorting from './data/sorting';
import searching from './data/searching';
import recursion from './data/recursion';
import backTracking from './data/backTracking';
import stackAndQueue from './data/stackandqueue';
import functions from './data/function';
import array from './data/array';
import stringVal from './data/string';
import Instalogo from './assets/images/2227.jpg'
function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [topic, setTopic] = useState('getting started');
  const [subtopic, setSubtopic] = useState('...');
  const [data, setData] = useState([...gettingStarted]);

  const topics = [
    { name: 'getting started', subtopics: ['intro to programing', 'Flow chart and pseudocodes','loops','patterns'] },
    { name: 'function', subtopics: [] },
    { name: 'array', subtopics: ["1d","2d","vector"] },
    { name: 'string', subtopics: []},
    { name: 'sorting', subtopics: [] },
    { name: 'Searching', subtopics: [] },
    { name: 'Recursion', subtopics: [] },
    { name: 'BackTracking', subtopics: [] },
    { name: 'Linked list', subtopics: ["doubly linked list"] },
    { name: 'stack and queue', subtopics: [] },

    { name: 'Generic Tree', subtopics: [] },
    { name: 'Binary tree', subtopics: [] },
    { name: 'BST', subtopics: [] },
    { name: '2 pointer & sliding window', subtopics: [] },
    { name: 'Heap', subtopics: [] },
    { name: 'HashMap', subtopics: [] },
    { name: 'dp', subtopics: [] },
    { name: 'graph', subtopics: [] },
  ]; // Add more topics with subtopics as needed

  const dataArray = [
    ...gettingStarted,
    ...stringVal,
    ...array,
    ...functions,
    ...linkedlist,
    ...stackAndQueue,
    ...searching,
    ...recursion,
    ...sorting,
    ...backTracking,
    ...genericTree,
    ...binaryTree,
    ...BST,
    ...pointer,
    ...heap,
    ...HashMap,
    ...dp,
    ...graph
  ];
  console.log(dataArray)

  const handleTopicClick = (topic) => {
    setTopic(topic);
    setSubtopic('');
    const filteredData = dataArray.filter(item => item.topic === topic);
    setData(filteredData);
  };

  const handleSubtopicClick = (subtopic) => {
    setSubtopic(subtopic);
    const filteredData = dataArray.filter(item => item.subtopic === subtopic);
    setData(filteredData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <div className="logo">Janeman Coder</div>
          <a href="https://www.instagram.com/janeman_coder/" target="_blank" rel="noopener noreferrer">
          <img src={Instalogo} alt="Instagram" className="insta-logo" />
          </a>
        </div>
        <div className="main-content">
          <div className="sidebar">
            <div className="sidebar-title">Topics</div>
            <ul className="topics-list">
              {topics.map((t, index) => (
                <li key={index}>
                  <div className={`topic ${topic === t.name ? 'selected' : ''}`} onClick={() => handleTopicClick(t.name)}>
                    {t.name}
                  </div>
                  {topic === t.name && (
                    <ul className="subtopics-list">
                      {t.subtopics.map((st, idx) => (
                        <li key={idx} className={`subtopic ${st === subtopic ? 'selected' : ''}`} onClick={() => handleSubtopicClick(st)}>
                          {st}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="table-container">
            <div className="current-topic">Current Topic: {topic} {subtopic && `> ${subtopic}`}</div>
            <div className="scrollable-table">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Question Link</th>
                    <th>Solution Link</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.sno}</td>
                      <td className="name-column">{item.name}</td>
                      <td className="question-column"><a href={item.ques_link} target="_blank" rel="noopener noreferrer">{item.ques_link}</a></td>
                      <td className="video-column"><a href={item.video_link} target="_blank" rel="noopener noreferrer">{item.video_link}</a></td>
                      <td className="comment-column">{item.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
