import {
  Coinbase,
  createSmartWallet,
  ExternalAddress,
} from "@coinbase/coinbase-sdk";
import dotenv from "dotenv";
import { privateKeyToAccount } from "viem/accounts";
import { generatePrivateKey } from "viem/accounts";
import { abi } from "./abi";

dotenv.config();

const apiKeyName = process.env.API_KEY_ID as string;
const apiKeyPrivateKey = process.env.API_KEY_SECRET_KEY as string;

Coinbase.configure({
  apiKeyName,
  privateKey: apiKeyPrivateKey,
});

(async () => {
  const privateKey = generatePrivateKey();
  const account = privateKeyToAccount(privateKey);
  const wallet = await createSmartWallet({
    signer: account,
  });

  const external = new ExternalAddress("base-sepolia", wallet.address);
  await external.faucet("eth");

  const response = await wallet.sendUserOperation({
    calls: [
      {
        abi,
        functionName: "noArgsFunc",
        to: "0xb720E683CB90838F23F66a37Adb26c24e04D1b60",
      },
      {
        abi,
        functionName: "payableStringFunc",
        to: "0xb720E683CB90838F23F66a37Adb26c24e04D1b60",
        args: [1, true],
      },
    ],
    chainId: 84532,
  });

  console.log(response);
})();
