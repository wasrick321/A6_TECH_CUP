import type { CategoryKey, Profile } from '../types';

/**
 * CLASS A6 – AUTO GENERATED PROFILES (66 Students)
 * Category: achievers
 * Images: Gender-based cycling
 * Stats: humour, nerdy, creativity (random balanced)
 */

const girlImages = [
  '/profile_character_img/ch1_girl.png',
  '/profile_character_img/ch3_girl.png',
  '/profile_character_img/ch6_girl.png',
];

const boyImages = [
  '/profile_character_img/ch2_boy.png',
  '/profile_character_img/ch4_boy.png',
  '/profile_character_img/ch5_boy.png',
  '/profile_character_img/ch7_boy.png',
];

let g = 0;
let b = 0;

const stat = () => Math.floor(60 + Math.random() * 30);

const habits = [
  'Attends lectures regularly',
  'Uses phone during breaks',
  'Studies before exams',
];

const personality = [
  'Friendly',
  'Quiet',
  'Practical',
  'Observant',
];

const qualities = [
  'Teamwork',
  'Adaptability',
  'Consistency',
];

const makeBoy = (id: number, name: string, roll: string): Profile => ({
  id: `a6-${id}`,
  name,
  role: 'Class Member',
  tags: ['student'],
  description: 'A regular student managing academics and daily college life.',
  stats: { humour: stat(), nerdy: stat(), creativity: stat() },
  entry: roll,
  image: boyImages[b++ % boyImages.length],
  achievements: ['Completed coursework'],
  habits,
  personality,
  qualities,
});

const makeGirl = (id: number, name: string, roll: string): Profile => ({
  id: `a6-${id}`,
  name,
  role: 'Class Member',
  tags: ['student'],
  description: 'A regular student balancing studies and campus activities.',
  stats: { humour: stat(), nerdy: stat(), creativity: stat() },
  entry: roll,
  image: girlImages[g++ % girlImages.length],
  achievements: ['Active academic participation'],
  habits,
  personality,
  qualities,
});

export const PROFILE_DATA: Record<CategoryKey, Profile[]> = {
  achievers: [
    makeBoy(1,'Ruhaan Dubey','A6-B1-1'),
    makeBoy(2,'Sachin Vijay Mardikar','A6-B1-2'),
    makeBoy(3,'Adil Sarvar Baig','A6-B1-3'),
    makeBoy(4,'Dnyanesh Deshpande','A6-B1-4'),
    makeGirl(5,'Manaswi Wasu','A6-B1-5'),
    makeBoy(6,'Dhruva Bajaj','A6-B1-6'),
    makeBoy(7,'Ramnayan Sharma','A6-B1-7'),
    makeBoy(8,'Atharva Dhobale','A6-B1-8'),
    makeBoy(9,'Anshuman Sharma','A6-B1-9'),
    makeBoy(10,'Palash Falke','A6-B1-10'),
    makeGirl(11,'Vedika Hemnani','A6-B1-11'),
    makeBoy(12,'Sandesh Sanjay Kinhikar','A6-B1-12'),
    makeBoy(13,'Rajveerr Awachat','A6-B1-13'),
    makeBoy(14,'Ved Loya','A6-B1-14'),
    makeBoy(15,'Om Vishal Satija','A6-B1-15'),
    makeGirl(16,'Deepika Pampati','A6-B1-16'),
    makeBoy(17,'Atharva Gangwani','A6-B1-17'),

    makeBoy(18,'Anay Kalwane','A6-B2-18'),
    makeBoy(19,'Parth Alti','A6-B2-19'),
    makeBoy(20,'Shahwaiz Ahmed Khan','A6-B2-20'),
    makeGirl(21,'Srushti Awadhoot','A6-B2-21'),
    makeGirl(22,'Rashi Umesh Chilwerwar','A6-B2-22'),
    makeBoy(23,'Diyansh Wasnik','A6-B2-23'),
    makeGirl(24,'Simran Ghadwe','A6-B2-24'),
    makeBoy(25,'Dipanshu Vishwakarma','A6-B2-25'),
    makeGirl(26,'Jiya Vanjani','A6-B2-26'),
    makeBoy(27,'Amey Karoo','A6-B2-27'),
    makeBoy(28,'Harsh Dholia','A6-B2-28'),
    makeBoy(29,'Sayyad Rehan Sayyad','A6-B2-29'),
    makeGirl(30,'Arya Pachkhede','A6-B2-30'),
    makeBoy(31,'Karunya Dahasahastra','A6-B2-31'),
    makeBoy(32,'Utkarsh Kadu','A6-B2-32'),
    makeBoy(33,'Manthan Sharma','A6-B2-33'),
    makeGirl(34,'Purva Gattani','A6-B2-34'),

    makeBoy(35,'Kartik Gidwani','A6-B3-35'),
    makeBoy(36,'Aditya Dubey','A6-B3-36'),
    makeBoy(37,'Pranav Gandhi','A6-B3-37'),
    makeBoy(38,'Raghav Chauksey','A6-B3-38'),
    makeBoy(39,'Samprat Prashant Deshmukh','A6-B3-39'),
    makeGirl(40,'Anannya Chawak','A6-B3-40'),
    makeBoy(41,'Yash Dudhabele','A6-B3-41'),
    makeBoy(42,'Sadu Sawarkar','A6-B3-42'),
    makeGirl(43,'Dimpal Maskey','A6-B3-43'),
    makeGirl(44,'Sharanya Mahajan','A6-B3-44'),
    makeBoy(45,'Vansh Suresh Sharma','A6-B3-45'),
    makeBoy(46,'MD Suffiyan Qureshi','A6-B3-46'),
    makeBoy(47,'Parth M Pathak','A6-B3-47'),
    makeGirl(48,'Jigisha Mandavkar','A6-B3-48'),
    makeGirl(49,'Anupama Sanjeevan','A6-B3-49'),
    makeBoy(50,'Harsh Maske','A6-B3-50'),

    makeGirl(51,'Avantika Doble','A6-B4-51'),
    makeGirl(52,'Tanushri Satish Patil','A6-B4-52'),
    makeBoy(53,'Sahil Baisware','A6-B4-53'),
    makeGirl(54,'Bhoomika Khilnani','A6-B4-54'),
    makeBoy(55,'Shubh Surana','A6-B4-55'),
    makeBoy(56,'Vishal Santosh Asati','A6-B4-56'),
    makeGirl(57,'Chitranshi Katre','A6-B4-57'),
    makeBoy(58,'Vedant Ghate','A6-B4-58'),
    makeBoy(59,'Pradyun Khot','A6-B4-59'),
    makeBoy(60,'Piyush Ashok Baheti','A6-B4-60'),
    makeGirl(61,'Palak Parkhi','A6-B4-61'),
    makeGirl(62,'Samrudhi Madankar','A6-B4-62'),
    makeBoy(63,'Nayan Zanwar','A6-B4-63'),
    makeBoy(64,'Agastya Godbole','A6-B4-64'),
    makeBoy(65,'Nihal Raut','A6-B4-65'),
    makeBoy(66,'Krish Sawant','A6-B4-66'),
  ],
};
