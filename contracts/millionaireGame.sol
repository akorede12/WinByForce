// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "millionToken.sol";

//import "./interface.sol";
contract MillionaireGame is Ownable(msg.sender) {
    using Math for uint256;

    // Enumeration representing different protocols/topics
    enum Protocol {
        zkSync,
        Polygon,
        Hyperlane,
        Hyperledger
    }

    uint256 public currentQuestionIndex;
    uint256 public totalPrizePool;
    uint256 public constant MAX_QUESTIONS = 1000; // Changed to accommodate more questions
    uint256 public constant TIME_LIMIT = 600; // Time limit for answering each question (in seconds)
    uint256 public constant COOLDOWN_PERIOD = 4 days; // Cooldown period for playing again
    uint256 public constant LIFELINE_FEE = 1; // Fee for using lifeline in token units

    struct Question {
        string question;
        string[4] choices;
        string correctChoice; // Changed to string type for answers
        uint256 difficultyLevel;
    }

    ERC20 public token; // ERC20 token used in the contract

    // Mapping of protocols to arrays of questions
    mapping(Protocol => Question[]) public questionsByProtocol;

    // Mapping of user addresses to their selected protocol
    mapping(address => Protocol) public userProtocolChoice;

    Question[MAX_QUESTIONS] public questions;

    mapping(address => uint256) public participantBalances;
    mapping(address => bool) public isParticipant;
    mapping(address => uint256) public lastPlayedTimestamp;
    address[] public leaderboard;

    event QuestionAsked(string question, string[4] choices);
    event PrizeWon(address winner, uint256 amount);
    event GameEnded();
    event LifelineUsed(address user, string lifelineType);
    event TokensEarned(address user, uint256 amount);

    constructor(address _tokenAddress) {
        token = ERC20(_tokenAddress);
        currentQuestionIndex = 0;
        totalPrizePool = 0;

        // Initialize questions (simplified for example)
        // Add 20 new zkSync questions here
        questions[0] = Question(
            "What is zkSync?",
            [
                "A layer 2 scaling solution for Ethereum",
                "A new consensus algorithm",
                "A blockchain-based social network",
                "A cryptocurrency trading platform"
            ],
            "A layer 2 scaling solution for Ethereum",
            1
        );
        questions[1] = Question(
            "Which company developed zkSync?",
            ["ConsenSys", "Matter Labs", "Chainlink", "Binance"],
            "Matter Labs",
            1
        );
        questions[2] = Question(
            "What does zk in zkSync stand for?",
            ["Zero latency", "Zero complexity", "Zero fees", "Zero-knowledge"],
            "Zero-knowledge",
            1
        );
        questions[3] = Question(
            "What technology does zkSync use to achieve scalability?",
            ["Sidechains", "Plasma", "Rollups", "Sharding"],
            "Rollups",
            1
        );
        questions[4] = Question(
            "What is the native token of zkSync called?",
            [
                "zkCoin",
                "SyncToken",
                "zkToken",
                "zkSync does not have a native token"
            ],
            "zkSync does not have a native token",
            1
        );
        questions[5] = Question(
            "How does zkSync achieve lower gas fees compared to Ethereum L1?",
            [
                "By increasing the block size",
                "By batching transactions off-chain",
                "By introducing a new consensus mechanism",
                "By implementing a new gas token"
            ],
            "By batching transactions off-chain",
            1
        );
        questions[6] = Question(
            "Which of the following is a feature of zkSync?",
            [
                "Instant withdrawals",
                "Proof of Authority",
                "Automated liquidity provision",
                "Decentralized oracles"
            ],
            "Instant withdrawals",
            1
        );
        questions[7] = Question(
            "Which programming language is used to write smart contracts for zkSync?",
            ["Rust", "Python", "Solidity", "Java"],
            "Solidity",
            1
        );
        questions[8] = Question(
            "Is zkSync compatible with existing Ethereum smart contracts?",
            [
                "Yes, it is fully compatible",
                "No, it requires new contracts to be written",
                "Partially, only certain functions are compatible",
                "zkSync does not support smart contracts"
            ],
            "Yes, it is fully compatible",
            1
        );
        questions[9] = Question(
            "What is zkSync's approach to privacy in transactions?",
            [
                "Full transaction visibility",
                "Selective privacy options",
                "Complete transaction anonymity",
                "zkSync does not focus on privacy"
            ],
            "Selective privacy options",
            1
        );
        questions[10] = Question(
            "What consensus mechanism does zkSync use?",
            [
                "Proof of Work",
                "Delegated Proof of Stake",
                "Proof of Stake",
                "zkSync does not use a consensus mechanism, it uses rollups"
            ],
            "zkSync does not use a consensus mechanism, it uses rollups",
            1
        );
        questions[11] = Question(
            "How can developers deploy smart contracts on zkSync?",
            [
                "By using a custom SDK provided by Matter Labs",
                "By writing contracts in a specific language called zkSol",
                "By deploying existing Ethereum smart contracts directly",
                "By using the zkSync mobile app"
            ],
            "By deploying existing Ethereum smart contracts directly",
            1
        );
        questions[12] = Question(
            "How does zkSync validate transactions?",
            [
                "Through a network of validators",
                "By requiring user authentication",
                "Using zero-knowledge proofs",
                "By staking tokens"
            ],
            "Using zero-knowledge proofs",
            1
        );
        questions[13] = Question(
            "What is the main benefit of using zkSync for developers?",
            [
                "Improved user interface",
                "Lower fees and higher transaction speeds",
                "Enhanced security for smart contracts",
                "Access to a private blockchain"
            ],
            "Lower fees and higher transaction speeds",
            1
        );
        questions[14] = Question(
            "Does zkSync support NFT transactions?",
            ["Yes", "No", "", ""],
            "Yes",
            1
        );
        questions[15] = Question(
            "What security measure does zkSync use?",
            [
                "Proof of Work",
                "Proof of Stake",
                "Zero-knowledge rollups",
                "Plasma"
            ],
            "Zero-knowledge rollups",
            1
        );
        questions[16] = Question(
            "What blockchain technology does zkSync primarily focus on?",
            [
                "Decentralized finance",
                "Blockchain storage",
                "Smart contract execution",
                "Ethereum scaling"
            ],
            "Ethereum scaling",
            1
        );
        questions[17] = Question(
            "Is zkSync a layer 2 solution?",
            ["Yes", "No", "", ""],
            "Yes",
            1
        );
        questions[18] = Question(
            "Does zkSync have its own blockchain?",
            ["Yes", "No", "", ""],
            "No",
            1
        );
        questions[19] = Question(
            "What is the primary advantage of zkSync's approach?",
            ["Security", "Scalability", "Interoperability", "All of the above"],
            "All of the above",
            1
        );

        // Add 30 new Polygon questions here
        questions[20] = Question(
            "What is Polygon?",
            [
                "A Layer 1 blockchain",
                "A Layer 2 scaling solution for Ethereum",
                "A new consensus algorithm",
                "A decentralized exchange"
            ],
            "A Layer 2 scaling solution for Ethereum",
            1
        );

        questions[21] = Question(
            "What was Polygon previously known as?",
            ["PolyChain", "PolygonChain", "Matic Network", "Ethereum Network"],
            "Matic Network",
            1
        );

        questions[22] = Question(
            "What is the native token of Polygon?",
            ["Polygon", "Matic", "Eth", "Poly"],
            "Matic",
            1
        );

        questions[23] = Question(
            "Which consensus mechanism does Polygon use?",
            [
                "Proof of Work",
                "Proof of Authority",
                "Proof of Stake",
                "Delegated Proof of Stake"
            ],
            "Proof of Stake",
            1
        );

        questions[24] = Question(
            "What is the primary advantage of Polygon?",
            [
                "Increased scalability and lower fees",
                "Improved privacy",
                "Enhanced security",
                "Blockchain-based social network"
            ],
            "Increased scalability and lower fees",
            1
        );

        questions[25] = Question(
            "How does Polygon achieve lower transaction costs?",
            [
                "By reducing the block size",
                "By introducing a new gas token",
                "By batching transactions off-chain",
                "By using Layer 2 technology"
            ],
            "By using Layer 2 technology",
            1
        );

        questions[26] = Question(
            "Is Polygon fully compatible with Ethereum?",
            ["Yes", "No", "", ""],
            "Yes",
            1
        );

        questions[27] = Question(
            "What is one of the major applications of Polygon?",
            [
                "Decentralized finance (DeFi)",
                "Blockchain games",
                "Both A and B",
                "None of the above"
            ],
            "Both A and B",
            1
        );

        questions[28] = Question(
            "What is Polygon's approach to privacy in transactions?",
            [
                "Full transaction visibility",
                "Selective privacy options",
                "Complete transaction anonymity",
                "Polygon does not focus on privacy"
            ],
            "Selective privacy options",
            1
        );

        questions[29] = Question(
            "Which network is Polygon built on top of?",
            ["Ethereum", "Bitcoin", "Solana", "Binance Smart Chain"],
            "Ethereum",
            1
        );

        // Add more questions...

        questions[30] = Question(
            "Does Polygon support smart contracts?",
            ["Yes", "No", "", ""],
            "Yes",
            1
        );

        questions[31] = Question(
            "What is the maximum supply of Matic tokens?",
            ["10 billion", "Unlimited", "21 million", "1 billion"],
            "10 billion",
            1
        );

        questions[32] = Question(
            "Who founded Polygon?",
            [
                "Vitalik Buterin",
                "Sandeep Nailwal and Jaynti Kanani",
                "Changpeng Zhao",
                "Brian Armstrong"
            ],
            "Sandeep Nailwal and Jaynti Kanani",
            1
        );

        questions[33] = Question(
            "How does Polygon ensure security?",
            [
                "By using its own validators",
                "By relying on Ethereum's security",
                "By using a new consensus algorithm",
                "By staking Matic tokens"
            ],
            "By relying on Ethereum's security",
            1
        );

        questions[34] = Question(
            "Which programming language is used for smart contracts on Polygon?",
            ["Solidity", "Python", "Java", "Rust"],
            "Solidity",
            1
        );

        questions[35] = Question(
            "What is the purpose of Polygon?",
            [
                "Decentralized applications (dApps)",
                "Tokenization",
                "Blockchain games",
                "All of the above"
            ],
            "All of the above",
            1
        );

        questions[48] = Question(
            "How can developers deploy dApps on Polygon?",
            [
                "By using Polygon's SDK",
                "By writing custom contracts",
                "By deploying directly on Ethereum",
                "By using Binance Smart Chain"
            ],
            "By using Polygon's SDK",
            1
        );

        questions[49] = Question(
            "What technology does Polygon use to scale Ethereum?",
            ["Sharding", "Plasma", "Rollups", "Proof of Work"],
            "Rollups",
            1
        );

        questions[50] = Question(
            "What is one of the unique features of Polygon?",
            [
                "Limited number of validators",
                "High transaction fees",
                "Zero-knowledge proofs",
                "Instant withdrawal"
            ],
            "Zero-knowledge proofs",
            1
        );

        questions[51] = Question(
            "How can you move assets between Ethereum and Polygon?",
            [
                "Through bridges",
                "Through direct transfers",
                "You can't move assets between them",
                "Polygon doesn't support assets from Ethereum"
            ],
            "Through bridges",
            1
        );

        questions[52] = Question(
            "What is the advantage of Polygon over traditional Ethereum?",
            [
                "Higher transaction fees",
                "Slower transaction speeds",
                "Limited smart contract support",
                "Lower transaction fees"
            ],
            "Lower transaction fees",
            1
        );

        questions[53] = Question(
            "What is the Polygon bridge?",
            [
                "A bridge for moving assets between Polygon and Ethereum",
                "A bridge for connecting two separate blockchains",
                "A bridge for connecting to other chains",
                "A bridge for staking tokens"
            ],
            "A bridge for moving assets between Polygon and Ethereum",
            1
        );

        questions[54] = Question(
            "What is the benefit of using Polygon for NFTs?",
            [
                "Higher transaction fees",
                "Lower transaction fees and faster transaction speeds",
                "Limited NFT support",
                "Increased gas fees"
            ],
            "Lower transaction fees and faster transaction speeds",
            1
        );

        questions[55] = Question(
            "Does Polygon have its own blockchain?",
            ["Yes", "No", "", ""],
            "Yes",
            1
        );

        // Add 30 new Hyperlane questions here
        questions[56] = Question(
            "What is Hyperlane?",
            [
                "A blockchain protocol",
                "A decentralized autonomous organization (DAO)",
                "A decentralized protocol for interchain communication",
                "A consensus mechanism"
            ],
            "A decentralized protocol for interchain communication",
            1
        );

        questions[57] = Question(
            "What is the primary goal of Hyperlane?",
            [
                "To increase blockchain interoperability",
                "To reduce gas fees",
                "To improve blockchain security",
                "To create a new blockchain"
            ],
            "To increase blockchain interoperability",
            1
        );

        questions[58] = Question(
            "What is the Hyperlane Mailbox?",
            [
                "A smart contract for sending and receiving messages across chains",
                "A decentralized database",
                "A new consensus algorithm",
                "A type of NFT"
            ],
            "A smart contract for sending and receiving messages across chains",
            1
        );

        questions[59] = Question(
            "How does Hyperlane facilitate interchain communication?",
            [
                "By using a single blockchain",
                "Through smart contract deployment",
                "By enabling seamless and secure cross-chain messaging",
                "Through off-chain relayers"
            ],
            "By enabling seamless and secure cross-chain messaging",
            1
        );

        questions[60] = Question(
            "What is the role of an interchain account in Hyperlane?",
            [
                "To manage cross-chain assets",
                "To handle smart contract execution",
                "To control and represent accounts across different blockchains",
                "To store data off-chain"
            ],
            "To control and represent accounts across different blockchains",
            1
        );

        questions[61] = Question(
            "What consensus mechanism does Hyperlane use?",
            [
                "Proof of Work",
                "Proof of Stake",
                "Delegated Proof of Stake",
                "None, Hyperlane uses optimistic consensus"
            ],
            "None, Hyperlane uses optimistic consensus",
            1
        );

        questions[62] = Question(
            "What is a key feature of Hyperlane?",
            [
                "Cross-chain messaging",
                "High transaction fees",
                "Proof of Work",
                "Limited blockchain support"
            ],
            "Cross-chain messaging",
            1
        );

        questions[63] = Question(
            "What is the Hyperlane relayer?",
            [
                "A network participant that helps facilitate message delivery",
                "A type of smart contract",
                "A new consensus algorithm",
                "A blockchain"
            ],
            "A network participant that helps facilitate message delivery",
            1
        );

        questions[64] = Question(
            "What kind of architecture does Hyperlane support?",
            ["Monolithic", "Modular", "Hybrid", "Fragmented"],
            "Modular",
            1
        );

        questions[65] = Question(
            "What is the Hyperlane API?",
            [
                "A tool for querying blockchain data",
                "A service for interchain communication",
                "A tool for building dApps",
                "A framework for smart contract development"
            ],
            "A service for interchain communication",
            1
        );

        questions[66] = Question(
            "How does Hyperlane ensure security?",
            [
                "By using Proof of Stake",
                "By relying on Ethereum's security",
                "Through a decentralized network of relayers",
                "By staking tokens"
            ],
            "Through a decentralized network of relayers",
            1
        );

        questions[67] = Question(
            "What is the Hyperlane protocol's approach to interoperability?",
            [
                "By supporting only Ethereum-based chains",
                "By supporting only non-Ethereum chains",
                "By enabling communication between different blockchains",
                "By focusing on one specific blockchain"
            ],
            "By enabling communication between different blockchains",
            1
        );

        questions[68] = Question(
            "Does Hyperlane support multiple blockchains?",
            ["Yes", "No", "", ""],
            "Yes",
            1
        );

        questions[69] = Question(
            "How can developers use Hyperlane?",
            [
                "By deploying smart contracts directly",
                "By utilizing Hyperlane's SDK and APIs",
                "By writing contracts in a specific language called HyperSol",
                "Through off-chain relayers"
            ],
            "By utilizing Hyperlane's SDK and APIs",
            1
        );

        questions[70] = Question(
            "What is Hyperlane's approach to governance?",
            [
                "Decentralized autonomous organization (DAO)",
                "Centralized governance",
                "Governance by Ethereum Foundation",
                "Governance by Binance Smart Chain"
            ],
            "Decentralized autonomous organization (DAO)",
            1
        );

        questions[71] = Question(
            "What is the Hyperlane validator?",
            [
                "A network participant that validates cross-chain messages",
                "A smart contract",
                "A decentralized storage solution",
                "A type of cryptocurrency wallet"
            ],
            "A network participant that validates cross-chain messages",
            1
        );

        questions[72] = Question(
            "What is the purpose of interchain security in Hyperlane?",
            [
                "To prevent cross-chain fraud",
                "To reduce gas fees",
                "To improve blockchain speed",
                "To create a new blockchain"
            ],
            "To prevent cross-chain fraud",
            1
        );

        questions[73] = Question(
            "Does Hyperlane have its own blockchain?",
            ["Yes", "No", "", ""],
            "No",
            1
        );

        questions[74] = Question(
            "What is a unique aspect of Hyperlane?",
            [
                "Limited blockchain compatibility",
                "Centralized governance",
                "Interchain accounts and cross-chain apps",
                "Proof of Work consensus"
            ],
            "Interchain accounts and cross-chain apps",
            1
        );

        questions[75] = Question(
            "What role does Hyperlane play in decentralized finance (DeFi)?",
            [
                "Enabling cross-chain liquidity",
                "Creating new DeFi protocols",
                "Providing higher fees",
                "None of the above"
            ],
            "Enabling cross-chain liquidity",
            1
        );

        questions[76] = Question(
            "What is the primary method of cross-chain communication in Hyperlane?",
            [
                "Off-chain relayers",
                "Cross-chain bridges",
                "Smart contract calls",
                "None, Hyperlane focuses on a single blockchain"
            ],
            "Cross-chain bridges",
            1
        );

        questions[77] = Question(
            "Does Hyperlane support non-Ethereum blockchains?",
            ["Yes", "No", "", ""],
            "Yes",
            1
        );

        questions[78] = Question(
            "What is the purpose of Hyperlane's optimistic consensus?",
            [
                "To increase gas fees",
                "To allow fast cross-chain messaging",
                "To reduce transaction speed",
                "To improve transaction costs"
            ],
            "To allow fast cross-chain messaging",
            1
        );

        questions[79] = Question(
            "What is Hyperlane's approach to interoperability?",
            [
                "Centralized governance",
                "Blockchain-specific interoperability",
                "Cross-chain messaging and communication",
                "Limited interoperability"
            ],
            "Cross-chain messaging and communication",
            1
        );

        questions[80] = Question(
            "What is Hyperlane's method of securing cross-chain transactions?",
            [
                "Proof of Work",
                "Proof of Stake",
                "Optimistic consensus",
                "Proof of Authority"
            ],
            "Optimistic consensus",
            1
        );

        questions[81] = Question(
            "What is the Hyperlane network?",
            [
                "A single blockchain",
                "A set of smart contracts and relayers across multiple blockchains",
                "A new blockchain protocol",
                "A decentralized network for storage"
            ],
            "A set of smart contracts and relayers across multiple blockchains",
            1
        );

        questions[82] = Question(
            "How does Hyperlane's interchain security work?",
            [
                "By using Ethereum's security",
                "Through a decentralized network of validators",
                "Through a centralized authority",
                "By staking tokens"
            ],
            "Through a decentralized network of validators",
            1
        );

        questions[83] = Question(
            "How does Hyperlane's optimistic consensus mechanism work?",
            [
                "By assuming honesty and punishing fraud",
                "By requiring user authentication",
                "By using Proof of Stake",
                "By using Proof of Work"
            ],
            "By assuming honesty and punishing fraud",
            1
        );

        questions[84] = Question(
            "What is Hyperlane's approach to developing cross-chain apps?",
            [
                "Using specific languages for each blockchain",
                "Focusing on Ethereum-based dApps",
                "Providing interoperability and abstraction layers",
                "By creating separate versions for each chain"
            ],
            "Providing interoperability and abstraction layers",
            1
        );

        questions[85] = Question(
            "Does Hyperlane use zero-knowledge proofs?",
            ["Yes", "No", "", ""],
            "Yes",
            1
        );

        questions[86] = Question(
            "What is a relayer in the Hyperlane network?",
            [
                "A smart contract",
                "A network participant that facilitates message delivery",
                "A new blockchain protocol",
                "A decentralized storage solution"
            ],
            "A network participant that facilitates message delivery",
            1
        );

        // Add 30 new Hyperledger questions here
        questions[86] = Question(
            "What is Hyperledger?",
            [
                "A blockchain",
                "A decentralized application (dApp)",
                "A project by The Linux Foundation for blockchain technologies",
                "A new cryptocurrency"
            ],
            "A project by The Linux Foundation for blockchain technologies",
            1
        );

        questions[87] = Question(
            "What is the goal of Hyperledger?",
            [
                "To create a private blockchain",
                "To build blockchain technologies for various industries",
                "To replace Ethereum",
                "To introduce new cryptocurrencies"
            ],
            "To build blockchain technologies for various industries",
            1
        );

        questions[88] = Question(
            "Which of the following is part of Hyperledger?",
            ["Polkadot", "Solana", "Fabric", "Avalanche"],
            "Fabric",
            1
        );

        questions[89] = Question(
            "What is Hyperledger Fabric?",
            [
                "A protocol for peer-to-peer networking",
                "A platform for enterprise blockchain solutions",
                "A new cryptocurrency",
                "A decentralized finance protocol"
            ],
            "A platform for enterprise blockchain solutions",
            1
        );

        questions[90] = Question(
            "What is the primary focus of Hyperledger Fabric?",
            [
                "Scalability",
                "Public blockchain applications",
                "Enterprise use cases",
                "NFT transactions"
            ],
            "Enterprise use cases",
            1
        );

        questions[91] = Question(
            "What is the consensus mechanism in Hyperledger Fabric?",
            [
                "Proof of Work",
                "Proof of Stake",
                "Kafka-based ordering",
                "Delegated Proof of Stake"
            ],
            "Kafka-based ordering",
            1
        );

        questions[92] = Question(
            "What is the purpose of Hyperledger Sawtooth?",
            [
                "To support decentralized finance (DeFi)",
                "To provide modular and flexible blockchain platforms",
                "To handle token standards",
                "To create NFTs"
            ],
            "To provide modular and flexible blockchain platforms",
            1
        );

        questions[93] = Question(
            "Which programming language is used for Hyperledger smart contracts?",
            ["Solidity", "Python", "Java", "C++"],
            "Python",
            1
        );

        questions[94] = Question(
            "What is Hyperledger Indy?",
            [
                "A framework for identity management",
                "A new consensus algorithm",
                "A new cryptocurrency",
                "A protocol for peer-to-peer networking"
            ],
            "A framework for identity management",
            1
        );

        questions[95] = Question(
            "What is Hyperledger Caliper?",
            [
                "A blockchain explorer",
                "A blockchain performance benchmarking tool",
                "A framework for creating dApps",
                "A token standard"
            ],
            "A blockchain performance benchmarking tool",
            1
        );

        questions[96] = Question(
            "What is the primary use case for Hyperledger Indy?",
            [
                "Supply chain management",
                "Decentralized finance (DeFi)",
                "Identity management",
                "NFT marketplaces"
            ],
            "Identity management",
            1
        );

        questions[97] = Question(
            "What is Hyperledger Cello?",
            [
                "A blockchain management console",
                "A smart contract language",
                "A cryptocurrency wallet",
                "A token standard"
            ],
            "A blockchain management console",
            1
        );

        questions[98] = Question(
            "Which organization oversees Hyperledger?",
            [
                "Ethereum Foundation",
                "The Linux Foundation",
                "Bitcoin Foundation",
                "Binance"
            ],
            "The Linux Foundation",
            1
        );

        questions[99] = Question(
            "What is Hyperledger Explorer?",
            [
                "A tool for exploring blockchain transactions",
                "A smart contract language",
                "A new blockchain",
                "A decentralized finance protocol"
            ],
            "A tool for exploring blockchain transactions",
            1
        );

        questions[100] = Question(
            "What is Hyperledger Quilt?",
            [
                "A smart contract language",
                "A cross-chain interoperability framework",
                "A blockchain management console",
                "A consensus algorithm"
            ],
            "A cross-chain interoperability framework",
            1
        );

        questions[101] = Question(
            "Which of the following is a use case for Hyperledger Fabric?",
            [
                "NFT marketplaces",
                "Decentralized finance (DeFi)",
                "Supply chain management",
                "Cryptocurrency trading"
            ],
            "Supply chain management",
            1
        );

        questions[102] = Question(
            "What programming language is commonly used to write chaincode in Hyperledger Fabric?",
            ["Solidity", "Python", "Java", "Rust"],
            "Java",
            1
        );

        questions[103] = Question(
            "What is the role of Hyperledger Caliper?",
            [
                "To manage blockchain infrastructure",
                "To benchmark blockchain performance",
                "To handle smart contract execution",
                "To create NFTs"
            ],
            "To benchmark blockchain performance",
            1
        );
    }

    function register() external {
        require(!isParticipant[msg.sender], "Already registered");
        isParticipant[msg.sender] = true;
    }

    // Function to allow a user to select their preferred protocol
    function setPreferredProtocol(Protocol protocol) external {
        userProtocolChoice[msg.sender] = protocol;
        currentQuestionIndex = 0; // Reset question index when a new protocol is selected
    }

    function getCurrentQuestion() external view returns (Question memory) {
        // Get the user's preferred protocol
        Protocol protocol = userProtocolChoice[msg.sender];

        // Retrieve the questions for the selected protocol
        Question[] memory protocolQuestions = questionsByProtocol[protocol];

        // Check if the current question index is within the bounds of the questions array
        require(
            currentQuestionIndex < protocolQuestions.length,
            "No more questions available for this protocol"
        );

        // Return the current question
        return protocolQuestions[currentQuestionIndex];
    }

    function getQuestion()
        external
        view
        returns (string memory question, string[4] memory choices)
    {
        require(currentQuestionIndex < MAX_QUESTIONS, "No question available");
        Question storage currentQuestion = questions[currentQuestionIndex];
        return (currentQuestion.question, currentQuestion.choices);
    }

    function answerQuestion(string memory _choice) external {
        require(isParticipant[msg.sender], "Not registered");
        require(bytes(_choice).length > 0, "Invalid choice");

        string memory correctChoice = questions[currentQuestionIndex]
            .correctChoice;

        // Compare the user's choice with the correct choice
        require(compareStrings(_choice, correctChoice), "Incorrect answer");

        // Update last played timestamp
        lastPlayedTimestamp[msg.sender] = block.timestamp;

        // Reward the user for correct answer
        token.transfer(msg.sender, 3); // Rewarding 3 tokens for each correct answer

        // Move to the next question or end the game
        if (currentQuestionIndex < MAX_QUESTIONS - 1) {
            currentQuestionIndex++;
        } else {
            endGame();
        }
    }

    function useLifeline(uint256 lifeline) external {
        require(isParticipant[msg.sender], "Not registered");
        require(lifeline >= 0 && lifeline < 3, "Invalid lifeline");
        require(
            token.balanceOf(msg.sender) >= LIFELINE_FEE,
            "Insufficient tokens"
        );

        // Deduct lifeline cost
        token.transferFrom(msg.sender, address(this), LIFELINE_FEE);

        // Implement lifeline functionality based on lifeline type
        if (lifeline == 0) {
            // Implement 50/50 lifeline
            // Randomly select two incorrect choices to eliminate
            uint256[2] memory choicesToRemove;
            uint256 numRemoved = 0;
            for (uint256 i = 0; i < 4; i++) {
                if (
                    !compareStrings(
                        questions[currentQuestionIndex].choices[i],
                        questions[currentQuestionIndex].correctChoice
                    ) && numRemoved < 2
                ) {
                    choicesToRemove[numRemoved] = i;
                    numRemoved++;
                }
            }
            emit LifelineUsed(msg.sender, "50/50");
        } else if (lifeline == 1) {
            // Implement "Ask the Audience" lifeline
            // For simplicity, we assume 70% correct audience answer
            uint256 correctAnswerPercentage = 70;
            uint256 correctChoiceIndex = findChoiceIndex(
                questions[currentQuestionIndex].correctChoice
            );
            uint256 audienceChoice = correctAnswerPercentage > 50
                ? correctChoiceIndex
                : (correctChoiceIndex + 1) % 4; // Assuming 70% audience picks the correct answer
            emit LifelineUsed(msg.sender, "Ask the Audience");
            // Use audienceChoice here
            audienceChoice;
        } else if (lifeline == 2) {
            // Implement "Phone a Friend" lifeline
            // For simplicity, we assume the friend knows the answer with 90% probability
            uint256 correctAnswerProbability = 90;
            uint256 correctChoiceIndex = findChoiceIndex(
                questions[currentQuestionIndex].correctChoice
            );
            uint256 friendChoice = correctAnswerProbability > 50
                ? correctChoiceIndex
                : (correctChoiceIndex + 1) % 4; // Assuming 90% probability of friend knowing the answer
            emit LifelineUsed(msg.sender, "Phone a Friend");
            // Use friendChoice here
            friendChoice;
        }
    }

    function endGame() public {
        // Calculate total prize pool
        totalPrizePool = token.balanceOf(address(this));

        // Determine winners and distribute prizes
        for (uint256 i = 0; i < MAX_QUESTIONS; i++) {
            address winner = getWinner(i);
            if (winner != address(0)) {
                uint256 prize = totalPrizePool / (MAX_QUESTIONS);
                token.transfer(winner, prize);
                emit PrizeWon(winner, prize);
                leaderboard.push(winner);
            }
        }

        // Reset game state
        currentQuestionIndex = 0;
        totalPrizePool = 0;

        // Emit event
        emit GameEnded();
    }

    function getWinner(
        uint256 /* questionIndex */
    ) private view returns (address) {
        uint256 lastQuestionIndex = MAX_QUESTIONS - 1;

        if (lastPlayedTimestamp[msg.sender] >= lastQuestionIndex) {
            return msg.sender;
        } else {
            return address(0);
        }
    }

    function findChoiceIndex(
        string memory _choice
    ) private view returns (uint256) {
        for (uint256 i = 0; i < 4; i++) {
            if (
                compareStrings(
                    _choice,
                    questions[currentQuestionIndex].choices[i]
                )
            ) {
                return i;
            }
        }
        revert("Choice not found");
    }

    function compareStrings(
        string memory a,
        string memory b
    ) internal pure returns (bool) {
        return
            (bytes(a).length == bytes(b).length) &&
            (keccak256(bytes(a)) == keccak256(bytes(b)));
    }

    function claimTokens() external {
        require(isParticipant[msg.sender], "Not registered");
        require(currentQuestionIndex == MAX_QUESTIONS, "Game not ended");

        // Calculate the number of tokens to be claimed based on participation
        uint256 participationTokens = calculateParticipationTokens();

        // Transfer the earned tokens to the participant
        token.transfer(msg.sender, participationTokens);

        // Emit event
        emit TokensEarned(msg.sender, participationTokens);
    }

    // Helper function to calculate participation tokens
    function calculateParticipationTokens() internal view returns (uint256) {
        uint256 totalParticipants = leaderboard.length;
        uint256 participantTokens = totalPrizePool / totalParticipants;

        // Use a conditional statement
        return
            participantBalances[msg.sender] < participantTokens
                ? participantBalances[msg.sender]
                : participantTokens;
    }
}
