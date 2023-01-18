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
    console.log("Contract deployed to:", gameContract.address); // 0x45D3817c10192F95575B2C13077D022277D1d090
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