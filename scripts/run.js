const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Leo", "Aang", "Pikachu"],       // Names
        ["https://i.imgur.com/pKd5Sdk.png", // Images
        "https://i.imgur.com/xVu4vFL.png", 
        "https://i.imgur.com/WMB6g9u.png"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],                       // Attack damage values
        "Elon Musk",
        "https://i.imgur.com/AksR0tt.png",
        1000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();

    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.checkIfUserHasNFT();
    console.log(txn.tokenId);
    console.log("=======");
    console.log(txn.characterNFT);
    // console.log(typeof txn);
    // console.log(txn[0]);
    
    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // txn = await gameContract.attackBoss();
    // await txn.wait();

    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);
};

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();