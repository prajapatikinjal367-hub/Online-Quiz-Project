// Questions for every topic. Each topic key must match the topic id used in the frontend (Topics.jsx).
//
// How to edit:
//   - question      : the question text
//   - options       : exactly 4 options
//   - correctAnswer : index of the right option (0 = first, 1 = second, 2 = third, 3 = fourth)
//
// After every change: save this file and run `npm run seed` in the Backend folder.

module.exports = {
  dbms: [
    {
      question: "What does DBMS stand for?",
      options: ["Data Backup Management System", "Digital Base Management Software", "Database Management System", "Data Binary Management System"],
      correctAnswer: 2,
    },
    {
      question: "Which key uniquely identifies each record in a table?",
      options: ["Primary key", "Foreign key", "Sort key", "Alias key"],
      correctAnswer: 0,
    },
    {
      question: "Which SQL command is used to retrieve data from a table?",
      options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
      correctAnswer: 3,
    },
    {
      question: "What is a foreign key used for?",
      options: ["To encrypt data", "To link two tables", "To delete a table", "To sort records"],
      correctAnswer: 1,
    },
    {
      question: "Which normal form removes partial dependency?",
      options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Fourth Normal Form (4NF)"],
      correctAnswer: 1,
    },
    {
      question: "In ACID properties, what does 'A' stand for?",
      options: ["Accuracy", "Availability", "Authorization", "Atomicity"],
      correctAnswer: 3,
    },
    {
      question: "Which SQL clause filters rows before grouping?",
      options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
      correctAnswer: 0,
    },
    {
      question: "Which command removes all rows from a table but keeps its structure?",
      options: ["DROP", "ALTER", "TRUNCATE", "RENAME"],
      correctAnswer: 2,
    },
    {
      question: "Which join returns only the rows that match in both tables?",
      options: ["LEFT JOIN", "RIGHT JOIN", "CROSS JOIN", "INNER JOIN"],
      correctAnswer: 3,
    },
    {
      question: "MongoDB is which type of database?",
      options: ["Relational (SQL)", "NoSQL (document-based)", "Spreadsheet", "Hierarchical only"],
      correctAnswer: 1,
    },
    {
      question: "Which SQL category do CREATE and ALTER belong to?",
      options: ["DML (Data Manipulation Language)", "DCL (Data Control Language)", "DDL (Data Definition Language)", "TCL (Transaction Control Language)"],
      correctAnswer: 2,
    },
    {
      question: "What is a transaction in a database?",
      options: ["A unit of work that completes fully or not at all", "A single table", "A backup file", "A type of index"],
      correctAnswer: 0,
    },
    {
      question: "What is the main purpose of an index?",
      options: ["To store images", "To speed up data retrieval", "To create user accounts", "To encrypt passwords"],
      correctAnswer: 1,
    },
    {
      question: "Which aggregate function counts the number of rows?",
      options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
      correctAnswer: 2,
    },
    {
      question: "Many students enrol in many courses. This relationship is:",
      options: ["One-to-one", "One-to-many", "Many-to-one only", "Many-to-many"],
      correctAnswer: 3,
    },
  ],
  webdev: [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Text Markup Level"],
      correctAnswer: 0,
    },
    {
      question: "Which tag creates the largest heading?",
      options: ["<h6>", "<head>", "<title>", "<h1>"],
      correctAnswer: 3,
    },
    {
      question: "Which CSS property changes the text colour?",
      options: ["font-color", "color", "text-style", "background"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML tag creates a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: 1,
    },
    {
      question: "Which CSS feature arranges items in a row or column easily?",
      options: ["Marquee", "Float clear", "Z-index", "Flexbox"],
      correctAnswer: 3,
    },
    {
      question: "Which keyword declares a constant in JavaScript?",
      options: ["const", "var", "let", "static"],
      correctAnswer: 0,
    },
    {
      question: "How do you write a single-line comment in JavaScript?",
      options: ["<!-- comment -->", "# comment", "// comment", "** comment **"],
      correctAnswer: 2,
    },
    {
      question: "What does DOM stand for?",
      options: ["Data Object Method", "Display Output Mode", "Document Order Map", "Document Object Model"],
      correctAnswer: 3,
    },
    {
      question: "Which attribute provides alternative text for an image?",
      options: ["src", "alt", "href", "name"],
      correctAnswer: 1,
    },
    {
      question: "What does === check in JavaScript?",
      options: ["Value only", "Type only", "Both value and type", "Memory address only"],
      correctAnswer: 2,
    },
    {
      question: "Which CSS property adds space outside an element's border?",
      options: ["margin", "padding", "border-radius", "outline"],
      correctAnswer: 0,
    },
    {
      question: "Which array method adds an item at the end?",
      options: ["pop()", "push()", "shift()", "slice()"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML tag is used to include JavaScript?",
      options: ["<js>", "<javascript>", "<script>", "<code>"],
      correctAnswer: 2,
    },
    {
      question: "Which CSS unit is relative to the viewport width?",
      options: ["px", "pt", "cm", "vw"],
      correctAnswer: 3,
    },
    {
      question: "Which event fires when a user clicks an element?",
      options: ["onhover", "onload", "onclick", "onsubmit"],
      correctAnswer: 2,
    },
  ],
  react: [
    {
      question: "What is React?",
      options: ["A database", "An operating system", "A web browser", "A JavaScript library for building user interfaces"],
      correctAnswer: 3,
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Facebook (Meta)", "Microsoft", "Amazon"],
      correctAnswer: 1,
    },
    {
      question: "Which hook is used to store data (state) in a component?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      correctAnswer: 1,
    },
    {
      question: "What is JSX?",
      options: ["A database language", "A CSS framework", "A testing tool", "A syntax that lets you write HTML-like code in JavaScript"],
      correctAnswer: 3,
    },
    {
      question: "Which hook runs code after render (side effects)?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correctAnswer: 0,
    },
    {
      question: "How is data passed from a parent to a child component?",
      options: ["Cookies", "Reducers", "Props", "Middleware"],
      correctAnswer: 2,
    },
    {
      question: "What is the virtual DOM?",
      options: ["A browser extension", "A database", "A CSS file", "A lightweight copy of the real DOM kept in memory"],
      correctAnswer: 3,
    },
    {
      question: "Component names in React must start with:",
      options: ["A lowercase letter", "A capital letter", "A number", "A symbol"],
      correctAnswer: 1,
    },
    {
      question: "Which attribute is used instead of 'class' in JSX?",
      options: ["class", "cssClass", "className", "styleClass"],
      correctAnswer: 2,
    },
    {
      question: "What does a function component return?",
      options: ["JSX (UI elements)", "A SQL query", "An image file", "A port number"],
      correctAnswer: 0,
    },
    {
      question: "Which method is commonly used to render a list in JSX?",
      options: ["for loop directly inside JSX", "map()", "switch", "try/catch"],
      correctAnswer: 1,
    },
    {
      question: "Why is the 'key' prop used in lists?",
      options: ["To style the item", "To encrypt the item", "To help React identify each item uniquely", "To fetch data"],
      correctAnswer: 2,
    },
    {
      question: "Which hook reads shared data without passing props at every level?",
      options: ["useId", "useLayoutEffect", "useState", "useContext"],
      correctAnswer: 3,
    },
    {
      question: "What happens when a component's state changes?",
      options: ["The component is deleted", "The app stops", "The component re-renders", "The page crashes"],
      correctAnswer: 2,
    },
    {
      question: "Which library is commonly used for page routing in React?",
      options: ["React Router", "Mongoose", "Nodemon", "Bcrypt"],
      correctAnswer: 0,
    },
  ],
  cybersecurity: [
    {
      question: "What is phishing?",
      options: ["Speeding up a network", "Tricking users into revealing sensitive information", "Backing up data", "Installing updates"],
      correctAnswer: 1,
    },
    {
      question: "What does a firewall do?",
      options: ["Writes program code", "Monitors and filters network traffic", "Stores passwords as plain text", "Cools the CPU"],
      correctAnswer: 1,
    },
    {
      question: "Which of these is the strongest password?",
      options: ["password123", "John2005", "qwerty", "Tr!9#vQ2x@Lp7"],
      correctAnswer: 3,
    },
    {
      question: "What does HTTPS provide that HTTP does not?",
      options: ["Encrypted communication", "Faster images", "More colours", "Free hosting"],
      correctAnswer: 0,
    },
    {
      question: "Which attack floods a server with traffic to make it unavailable?",
      options: ["Phishing", "SQL injection", "DDoS attack", "Keylogging"],
      correctAnswer: 2,
    },
    {
      question: "What is malware?",
      options: ["A type of hardware", "A coding standard", "A web browser", "Software designed to harm or exploit a system"],
      correctAnswer: 3,
    },
    {
      question: "What is two-factor authentication (2FA)?",
      options: ["Using two passwords of the same type", "Verifying identity using two different methods", "Logging in twice", "Using two computers"],
      correctAnswer: 1,
    },
    {
      question: "SQL injection mainly targets:",
      options: ["The monitor", "The keyboard", "The database through input fields", "The router's power supply"],
      correctAnswer: 2,
    },
    {
      question: "What does a VPN do?",
      options: ["Creates an encrypted tunnel for your internet traffic", "Removes all viruses", "Increases RAM", "Deletes cookies"],
      correctAnswer: 0,
    },
    {
      question: "What is ransomware?",
      options: ["A free antivirus", "Malware that locks data and demands payment", "A password manager", "A type of VPN"],
      correctAnswer: 1,
    },
    {
      question: "What is encryption?",
      options: ["Deleting data permanently", "Compressing images", "Converting data into an unreadable form using a key", "Printing data"],
      correctAnswer: 2,
    },
    {
      question: "Which is an example of social engineering?",
      options: ["Overclocking a CPU", "Formatting a disk", "Updating drivers", "Tricking a person into giving access"],
      correctAnswer: 3,
    },
    {
      question: "What does the CIA triad stand for?",
      options: ["Control, Identity, Access", "Code, Internet, Authentication", "Confidentiality, Integrity, Availability", "Cloud, Intranet, Audit"],
      correctAnswer: 2,
    },
    {
      question: "What is a brute-force attack?",
      options: ["Trying many password combinations until one works", "Sending fake emails", "Blocking a website", "Updating software"],
      correctAnswer: 0,
    },
    {
      question: "What is a good practice for software updates?",
      options: ["Never update software", "Update only once a year", "Disable updates", "Install security updates promptly"],
      correctAnswer: 3,
    },
  ],
  datascience: [
    {
      question: "What is Data Science?",
      options: ["Designing computer hardware", "Extracting insights and knowledge from data", "Building websites only", "Repairing networks"],
      correctAnswer: 1,
    },
    {
      question: "Which language is most popular for data science?",
      options: ["COBOL", "Assembly", "Pascal", "Python"],
      correctAnswer: 3,
    },
    {
      question: "Which Python library is used for data manipulation with DataFrames?",
      options: ["Pandas", "Flask", "Django", "Pygame"],
      correctAnswer: 0,
    },
    {
      question: "Which Python library is used for numerical arrays?",
      options: ["Requests", "Tkinter", "NumPy", "Pytest"],
      correctAnswer: 2,
    },
    {
      question: "Which chart is best to show the distribution of a numeric variable?",
      options: ["Pie chart", "Flowchart", "Org chart", "Histogram"],
      correctAnswer: 3,
    },
    {
      question: "What is the mean of 2, 4, 6, 8?",
      options: ["4", "5", "6", "20"],
      correctAnswer: 1,
    },
    {
      question: "What is the median of 3, 5, 7, 9, 11?",
      options: ["5", "9", "7", "35"],
      correctAnswer: 2,
    },
    {
      question: "What does 'cleaning data' mean?",
      options: ["Fixing or removing incorrect, missing or duplicate data", "Washing the computer", "Encrypting the data", "Printing the data"],
      correctAnswer: 0,
    },
    {
      question: "What is a 'null' or 'NaN' value in a dataset?",
      options: ["The highest value", "A missing value", "A duplicate row", "A text column"],
      correctAnswer: 1,
    },
    {
      question: "Which chart shows the relationship between two numeric variables?",
      options: ["Pie chart", "Gantt chart", "Scatter plot", "Venn diagram"],
      correctAnswer: 2,
    },
    {
      question: "What is an outlier?",
      options: ["The average value", "A missing value", "The first value", "A value far away from the other values"],
      correctAnswer: 3,
    },
    {
      question: "Which tool is commonly used to run Python data analysis in notebooks?",
      options: ["Photoshop", "Notepad", "Jupyter Notebook", "Paint"],
      correctAnswer: 2,
    },
    {
      question: "What does CSV stand for?",
      options: ["Comma-Separated Values", "Computer System Variables", "Common Server Version", "Coded Sheet Values"],
      correctAnswer: 0,
    },
    {
      question: "What is the goal of data visualization?",
      options: ["To delete unused data", "To make data bigger", "To encrypt data", "To present data in a visual form that is easy to understand"],
      correctAnswer: 3,
    },
    {
      question: "In a dataset, what is a 'feature'?",
      options: ["A software bug", "An input variable (column) used for analysis or prediction", "A type of chart", "A backup copy"],
      correctAnswer: 1,
    },
  ],
  dsa: [
    {
      question: "Which data structure follows LIFO (Last In, First Out)?",
      options: ["Queue", "Array", "Tree", "Stack"],
      correctAnswer: 3,
    },
    {
      question: "Which data structure follows FIFO (First In, First Out)?",
      options: ["Queue", "Stack", "Heap", "Graph"],
      correctAnswer: 0,
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
      correctAnswer: 2,
    },
    {
      question: "Binary search works only on:",
      options: ["Unsorted data", "Linked lists only", "Strings only", "Sorted data"],
      correctAnswer: 3,
    },
    {
      question: "What is the time complexity of accessing an array element by index?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
      correctAnswer: 1,
    },
    {
      question: "Which data structure uses nodes connected by pointers?",
      options: ["Array", "Matrix", "Linked list", "Table"],
      correctAnswer: 2,
    },
    {
      question: "Which sorting algorithm repeatedly swaps adjacent elements if they are in the wrong order?",
      options: ["Bubble sort", "Merge sort", "Quick sort", "Heap sort"],
      correctAnswer: 0,
    },
    {
      question: "In a binary tree, each node has at most how many children?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1,
    },
    {
      question: "Which traversal visits the root first, then left, then right?",
      options: ["Inorder", "Postorder", "Preorder", "Reverse order"],
      correctAnswer: 2,
    },
    {
      question: "What is recursion?",
      options: ["A loop that never ends", "A type of array", "A sorting method", "A function calling itself"],
      correctAnswer: 3,
    },
    {
      question: "Which data structure is used for BFS (Breadth-First Search)?",
      options: ["Stack", "Heap", "Queue", "Set"],
      correctAnswer: 2,
    },
    {
      question: "What is the worst-case time complexity of bubble sort?",
      options: ["O(n²)", "O(n)", "O(log n)", "O(1)"],
      correctAnswer: 0,
    },
    {
      question: "Which data structure is best for implementing undo operations?",
      options: ["Queue", "Graph", "Hash table", "Stack"],
      correctAnswer: 3,
    },
    {
      question: "A hash table stores data as:",
      options: ["Only sorted numbers", "Key-value pairs", "Only text files", "Only images"],
      correctAnswer: 1,
    },
    {
      question: "Which technique divides a problem into smaller parts, solves them and combines the results?",
      options: ["Brute force only", "Divide and conquer", "Random guessing", "Greedy only"],
      correctAnswer: 1,
    },
  ],
  projectmanagement: [
    {
      question: "What is a project?",
      options: ["A temporary effort to create a unique product or service", "An ongoing daily routine", "A permanent department", "A type of software"],
      correctAnswer: 0,
    },
    {
      question: "Which methodology uses short iterations called sprints?",
      options: ["Waterfall", "V-model", "Scrum", "Big Bang"],
      correctAnswer: 2,
    },
    {
      question: "What does the 'scope' of a project define?",
      options: ["The office location", "The number of employees", "The colour of the logo", "The work that is included in the project"],
      correctAnswer: 3,
    },
    {
      question: "What is a milestone?",
      options: ["A type of budget", "A significant point or achievement in a project", "A team member", "A software tool"],
      correctAnswer: 1,
    },
    {
      question: "A Gantt chart is used to:",
      options: ["Store customer data", "Write code", "Show the project schedule on a timeline", "Encrypt files"],
      correctAnswer: 2,
    },
    {
      question: "Who is responsible for the overall success of a project?",
      options: ["Project manager", "Security guard", "Office receptionist", "Visitor"],
      correctAnswer: 0,
    },
    {
      question: "What does 'risk' mean in project management?",
      options: ["A guaranteed profit", "An uncertain event that can affect the project", "A completed task", "A team meeting"],
      correctAnswer: 1,
    },
    {
      question: "What are the three parts of the 'triple constraint'?",
      options: ["Colour, size and shape", "People, place and price", "Scope, time and cost", "Code, test and deploy"],
      correctAnswer: 2,
    },
    {
      question: "What is a stakeholder?",
      options: ["Only the project manager", "Only the developers", "A project deadline", "Anyone affected by or interested in the project"],
      correctAnswer: 3,
    },
    {
      question: "In Agile, what is a 'sprint'?",
      options: ["A race between teams", "A type of bug", "A short, fixed-length period to complete planned work", "A final report"],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of a project budget?",
      options: ["To plan and control project costs", "To list team hobbies", "To design the user interface", "To store passwords"],
      correctAnswer: 0,
    },
    {
      question: "Which model completes each phase fully before the next one starts?",
      options: ["Scrum", "Kanban", "Extreme Programming", "Waterfall"],
      correctAnswer: 3,
    },
    {
      question: "What is a deliverable?",
      options: ["A project risk", "A product or result produced by the project", "A meeting room", "An employee's salary"],
      correctAnswer: 1,
    },
    {
      question: "What does WBS stand for?",
      options: ["Web Based System", "Work Breakdown Structure", "Work Budget Sheet", "Weekly Business Summary"],
      correctAnswer: 1,
    },
    {
      question: "What happens in the 'closing' phase of a project?",
      options: ["Start hiring the team", "Define the project idea", "Create the first schedule", "Finish the work, hand over results and review lessons learned"],
      correctAnswer: 3,
    },
  ],
  cloud: [
    {
      question: "What is cloud computing?",
      options: ["Storing data only on a pen drive", "Using only local servers", "Delivering computing services over the internet", "Writing code offline"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is a cloud service provider?",
      options: ["Photoshop", "VLC Player", "WinRAR", "Amazon Web Services (AWS)"],
      correctAnswer: 3,
    },
    {
      question: "What does SaaS stand for?",
      options: ["System as a Server", "Software as a Service", "Storage as a Software", "Server as a System"],
      correctAnswer: 1,
    },
    {
      question: "What does IaaS provide?",
      options: ["Only finished software apps", "Only email", "Virtual machines, storage and networking", "Only antivirus"],
      correctAnswer: 2,
    },
    {
      question: "Which is an example of SaaS?",
      options: ["Google Docs", "A raw virtual machine", "A physical server", "A network cable"],
      correctAnswer: 0,
    },
    {
      question: "What is a major benefit of cloud computing?",
      options: ["Always requires buying hardware", "Pay only for the resources you use", "No internet needed", "Fixed cost always"],
      correctAnswer: 1,
    },
    {
      question: "What does 'scalability' mean in the cloud?",
      options: ["Making code shorter", "Using a bigger monitor", "Ability to increase or decrease resources as needed", "Deleting old files"],
      correctAnswer: 2,
    },
    {
      question: "Which cloud model is shared by many users over the internet?",
      options: ["Private cloud", "Offline cloud", "Local cloud", "Public cloud"],
      correctAnswer: 3,
    },
    {
      question: "A private cloud is:",
      options: ["Open to everyone", "Always free", "Used by a single organization", "Available only offline"],
      correctAnswer: 2,
    },
    {
      question: "What is a virtual machine (VM)?",
      options: ["A software-based computer running inside a physical computer", "A very large monitor", "A hardware cable", "A type of keyboard"],
      correctAnswer: 0,
    },
    {
      question: "What does PaaS provide?",
      options: ["Only physical servers", "Only free websites", "Only printers", "A platform to build and deploy applications"],
      correctAnswer: 3,
    },
    {
      question: "Which AWS service is used to store files (objects)?",
      options: ["Amazon EC2", "Amazon S3", "Amazon RDS", "AWS Lambda"],
      correctAnswer: 1,
    },
    {
      question: "What is 'serverless' computing?",
      options: ["Computing with no servers existing at all", "Running code without managing servers yourself", "Computing without electricity", "Computing only on mobile"],
      correctAnswer: 1,
    },
    {
      question: "What does a hybrid cloud combine?",
      options: ["Two printers", "Two laptops", "Two websites", "Public and private clouds"],
      correctAnswer: 3,
    },
    {
      question: "What is a data center?",
      options: ["A facility that houses servers and storage", "A type of mobile app", "A programming language", "A web browser"],
      correctAnswer: 0,
    },
  ],
  softwareengineering: [
    {
      question: "What is software engineering?",
      options: ["Repairing computer hardware", "Designing only websites", "Typing documents", "A systematic approach to developing and maintaining software"],
      correctAnswer: 3,
    },
    {
      question: "What does SDLC stand for?",
      options: ["System Design Language Code", "Software Development Life Cycle", "Software Data Link Control", "Secure Development Logic Chain"],
      correctAnswer: 1,
    },
    {
      question: "Which is the first phase of SDLC?",
      options: ["Deployment", "Maintenance", "Requirement gathering and analysis", "Testing"],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of software testing?",
      options: ["To find defects and verify the software works correctly", "To write documentation", "To increase RAM", "To design logos"],
      correctAnswer: 0,
    },
    {
      question: "Which testing checks individual units or functions of code?",
      options: ["Integration testing", "Unit testing", "System testing", "Acceptance testing"],
      correctAnswer: 1,
    },
    {
      question: "What is a bug?",
      options: ["A new feature", "A type of user", "An error or defect in software", "A hardware port"],
      correctAnswer: 2,
    },
    {
      question: "What does UML stand for?",
      options: ["Universal Machine Logic", "Unique Module List", "User Maintenance Level", "Unified Modeling Language"],
      correctAnswer: 3,
    },
    {
      question: "What is version control used for?",
      options: ["Compressing images", "Cooling servers", "Tracking and managing changes to code", "Designing databases only"],
      correctAnswer: 2,
    },
    {
      question: "Which tool is widely used for version control?",
      options: ["Git", "Excel", "Paint", "Notepad"],
      correctAnswer: 0,
    },
    {
      question: "Which model is also called the 'linear sequential' model?",
      options: ["Agile model", "Spiral model", "Prototype model", "Waterfall model"],
      correctAnswer: 3,
    },
    {
      question: "What is refactoring?",
      options: ["Adding new features only", "Improving code structure without changing its behavior", "Deleting the project", "Changing the programming language"],
      correctAnswer: 1,
    },
    {
      question: "What is a 'requirement' in software engineering?",
      options: ["A type of bug", "A need or condition the software must satisfy", "A testing tool", "A code comment"],
      correctAnswer: 1,
    },
    {
      question: "What does the 'maintenance' phase involve?",
      options: ["Collecting initial ideas", "Choosing a company name", "Printing manuals only", "Fixing bugs and updating the software after release"],
      correctAnswer: 3,
    },
    {
      question: "Which principle says a class should have only one reason to change?",
      options: ["Single Responsibility Principle", "Open/Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle"],
      correctAnswer: 0,
    },
    {
      question: "What is a code review?",
      options: ["Compiling code", "Deleting old code", "Examining a teammate's code to find issues", "Running a database backup"],
      correctAnswer: 2,
    },
  ],
  ml: [
    {
      question: "What is Machine Learning?",
      options: ["Manually writing every rule", "Teaching computers to learn patterns from data", "Building computer hardware", "Designing websites"],
      correctAnswer: 1,
    },
    {
      question: "Which type of learning uses labeled data?",
      options: ["Unsupervised learning", "Reinforcement learning only", "Supervised learning", "Random learning"],
      correctAnswer: 2,
    },
    {
      question: "Which type of learning finds hidden patterns in unlabeled data?",
      options: ["Unsupervised learning", "Supervised learning", "Manual learning", "Labeled learning"],
      correctAnswer: 0,
    },
    {
      question: "Predicting house prices is an example of:",
      options: ["Classification", "Regression", "Clustering", "Compression"],
      correctAnswer: 1,
    },
    {
      question: "Classifying an email as spam or not spam is:",
      options: ["Regression", "Dimensionality reduction", "Classification", "Data entry"],
      correctAnswer: 2,
    },
    {
      question: "What is overfitting?",
      options: ["The model is too small to train", "The data is missing", "The model runs too fast", "The model learns training data too well and performs poorly on new data"],
      correctAnswer: 3,
    },
    {
      question: "Which library is popular for ML in Python?",
      options: ["Flask", "Bootstrap", "scikit-learn", "jQuery"],
      correctAnswer: 2,
    },
    {
      question: "What is a training dataset used for?",
      options: ["To teach the model", "To display results", "To store passwords", "To design the UI"],
      correctAnswer: 0,
    },
    {
      question: "What is a test dataset used for?",
      options: ["To train the model", "To clean the data", "To delete features", "To evaluate the model on unseen data"],
      correctAnswer: 3,
    },
    {
      question: "Which algorithm is used for grouping similar data points (clustering)?",
      options: ["Linear Regression", "K-Means", "Naive Bayes", "Logistic Regression"],
      correctAnswer: 1,
    },
    {
      question: "Neural networks are inspired by:",
      options: ["The solar system", "The human brain", "Road networks", "Database tables"],
      correctAnswer: 1,
    },
    {
      question: "What does 'accuracy' measure?",
      options: ["The size of the dataset", "The training time", "The number of features", "The percentage of correct predictions"],
      correctAnswer: 3,
    },
    {
      question: "What is a 'feature' in machine learning?",
      options: ["An input variable used by the model", "The final output only", "A software license", "A type of GPU"],
      correctAnswer: 0,
    },
    {
      question: "Which is a deep learning framework?",
      options: ["MySQL", "WordPress", "TensorFlow", "Apache"],
      correctAnswer: 2,
    },
    {
      question: "Which type of learning uses rewards and penalties?",
      options: ["Supervised learning", "Unsupervised learning", "Batch learning", "Reinforcement learning"],
      correctAnswer: 3,
    },
  ],
  fullstack: [
    {
      question: "What does a full stack developer work on?",
      options: ["Only the database hardware", "Only the user interface colours", "Both frontend and backend", "Only network cables"],
      correctAnswer: 2,
    },
    {
      question: "What does MERN stand for?",
      options: ["MongoDB, Express, React, Node.js", "MySQL, Express, Ruby, Nginx", "MongoDB, Electron, Redux, Nest", "MariaDB, Ember, React, Node.js"],
      correctAnswer: 0,
    },
    {
      question: "Which part of the MERN stack is the database?",
      options: ["Express", "MongoDB", "React", "Node.js"],
      correctAnswer: 1,
    },
    {
      question: "Which HTTP method is commonly used to create new data?",
      options: ["GET", "DELETE", "POST", "HEAD"],
      correctAnswer: 2,
    },
    {
      question: "Which HTTP method is used to read or fetch data?",
      options: ["POST", "PUT", "PATCH", "GET"],
      correctAnswer: 3,
    },
    {
      question: "What does API stand for?",
      options: ["Applied Program Instruction", "Automatic Page Integration", "Application Programming Interface", "Application Process Index"],
      correctAnswer: 2,
    },
    {
      question: "What is the role of Express.js?",
      options: ["A Node.js framework to build servers and APIs", "A database", "A CSS library", "A browser"],
      correctAnswer: 0,
    },
    {
      question: "Which format is most commonly used to send data between frontend and backend?",
      options: ["MP3", "EXE", "PSD", "JSON"],
      correctAnswer: 3,
    },
    {
      question: "What does CORS control?",
      options: ["Screen resolution", "Which websites can access a server's resources", "CPU speed", "File compression"],
      correctAnswer: 1,
    },
    {
      question: "What is JWT used for?",
      options: ["Styling web pages", "Secure authentication using tokens", "Compressing videos", "Sorting arrays"],
      correctAnswer: 1,
    },
    {
      question: "Why are passwords hashed before saving?",
      options: ["To make them longer to type", "To reduce database size", "To make login slower for users", "So the real password is not stored in plain text"],
      correctAnswer: 3,
    },
    {
      question: "Which HTTP status code means 'Not Found'?",
      options: ["404", "200", "401", "500"],
      correctAnswer: 0,
    },
    {
      question: "Which HTTP status code means success?",
      options: ["404", "500", "200", "403"],
      correctAnswer: 2,
    },
    {
      question: "What does npm stand for?",
      options: ["New Program Module", "Node Process Monitor", "Network Package Manager", "Node Package Manager"],
      correctAnswer: 3,
    },
    {
      question: "In which file are npm project dependencies listed?",
      options: ["index.html", "package.json", "style.css", "server.log"],
      correctAnswer: 1,
    },
  ],
  misc: [
    {
      question: "Which company created the Windows operating system?",
      options: ["Microsoft", "Apple", "Google", "IBM"],
      correctAnswer: 0,
    },
    {
      question: "What does CPU stand for?",
      options: ["Central Program Unit", "Central Processing Unit", "Computer Power Unit", "Core Processing Utility"],
      correctAnswer: 1,
    },
    {
      question: "What does RAM stand for?",
      options: ["Read Access Memory", "Run All Memory", "Random Access Memory", "Rapid Application Module"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is an input device?",
      options: ["Monitor", "Printer", "Speaker", "Keyboard"],
      correctAnswer: 3,
    },
    {
      question: "What does URL stand for?",
      options: ["Universal Run Link", "Unique Resource Label", "Uniform Resource Locator", "User Reference Locator"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is NOT a programming language?",
      options: ["HTTP", "Python", "Java", "C++"],
      correctAnswer: 0,
    },
    {
      question: "How many bits are in 1 byte?",
      options: ["4 bits", "16 bits", "10 bits", "8 bits"],
      correctAnswer: 3,
    },
    {
      question: "Which binary number equals decimal 5?",
      options: ["110", "101", "111", "100"],
      correctAnswer: 1,
    },
    {
      question: "Which of these is a web browser?",
      options: ["Microsoft Excel", "Mozilla Firefox", "VLC Player", "Adobe Reader"],
      correctAnswer: 1,
    },
    {
      question: "What does Wi-Fi mainly provide?",
      options: ["Electricity", "Cooling", "Printing only", "Wireless internet connectivity"],
      correctAnswer: 3,
    },
    {
      question: "Which file extension is used for Python files?",
      options: [".py", ".java", ".js", ".cpp"],
      correctAnswer: 0,
    },
    {
      question: "What does AI stand for?",
      options: ["Automatic Internet", "Advanced Input", "Artificial Intelligence", "Applied Instruction"],
      correctAnswer: 2,
    },
    {
      question: "Which shortcut copies selected text in Windows?",
      options: ["Ctrl + V", "Ctrl + X", "Ctrl + Z", "Ctrl + C"],
      correctAnswer: 3,
    },
    {
      question: "Which of these is a cloud storage service?",
      options: ["Microsoft Paint", "Google Drive", "Notepad", "Calculator"],
      correctAnswer: 1,
    },
    {
      question: "What is the full form of PDF?",
      options: ["Personal Data File", "Printed Document Form", "Portable Document Format", "Public Digital Format"],
      correctAnswer: 2,
    },
  ],
};