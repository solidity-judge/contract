// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0;
import {TestCase, Verdict} from "../libraries/Tests.sol";
import {ITestManager} from "../interfaces/ITestManager.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

abstract contract TestManager is Initializable, ITestManager {
    address public author;
    uint256 public testLength;
    uint256 public testVersion;
    mapping(uint256 => TestCase) public tests;

    modifier onlyAuthor() {
        require(msg.sender == author, "msg.sender not author");
        _;
    }

    modifier modifyTest() {
        ++testVersion;
        _;
        emit NewTestVersion(testVersion, _getTestArray());
    }

    function _TestManagerInit(address _author) internal onlyInitializing {
        author = _author;
    }

    function replaceTests(
        TestCase[] calldata newTests
    ) external onlyAuthor modifyTest {
        for (uint256 i = 0; i < newTests.length; ++i) {
            tests[i] = newTests[i];
        }
        testLength = newTests.length;
    }

    function addTest(TestCase calldata test) external onlyAuthor modifyTest {
        tests[testLength++] = test;
    }

    function _getTestArray()
        private
        view
        returns (TestCase[] memory testArray)
    {
        testArray = new TestCase[](testLength);
        for (uint256 i = 0; i < testArray.length; ++i) {
            testArray[i] = tests[i];
        }
    }
}
