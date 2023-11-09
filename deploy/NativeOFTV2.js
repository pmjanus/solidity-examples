const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const { ethers } = require("hardhat")

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
    console.log(`[${hre.network.name}] Endpoint Address: ${lzEndpointAddress}`)
    const globalSupply = ethers.utils.parseUnits("1000000", 18)
    const sharedDecimals = 18
    const _name = "Telos"
    const _symbol ="TLOS"

    await deploy("NativeOFTV2", {
        from: deployer,
        args: [_name, _symbol,  sharedDecimals, lzEndpointAddress],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["NativeOFTV2"]
