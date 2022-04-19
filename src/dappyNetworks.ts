import { DappyNetworkId, DappyNetworkMember } from './types';

export const dappyNetworks: Record<DappyNetworkId, DappyNetworkMember[]> = {
  d: [
    {
      ip: '195.154.70.253',
      port: '443',
      hostname: 'dappybetanetwork',
      scheme: 'https',
      caCert:
        'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUM3akNDQWRhZ0F3SUJBZ0lKQU5wamR1U25BTlFLTUEwR0NTcUdTSWIzRFFFQkN3VUFNQnN4R1RBWEJnTlYKQkFNTUVHUmhjSEI1WW1WMFlXNWxkSGR2Y21zd0hoY05NakV4TVRFNE1Ea3pNek15V2hjTk16QXdNakEwTURregpNek15V2pBYk1Sa3dGd1lEVlFRRERCQmtZWEJ3ZVdKbGRHRnVaWFIzYjNKck1JSUJJakFOQmdrcWhraUc5dzBCCkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQW1hYmkrdUlad0c2UkROcUVyTjZISTRmbVBDbVkxVFN1cnpuYzZZN1gKcmVQTEJkOTJRYlRmR0ZObUFFRWEvU1BBZnhzL2ZzeHh2V3RjdWJDSyt1a3ZiUTlDbFhGckZkam16Z3R6eUhxNApyc1MvaWEyNGJjRlNEY3FpOWVnK2Y4a1VPUUo1TnlpZktUKzRZdWdBa2VEMGhVaEM3TTJhZllTTXBrajZvRW56CjFmNlVpZEU1aGljb2hxamlWOUl5b3JKQ0RFWkV1NWRBSTJYa0pWS1ZYcGdsbk1kdEtxZHU2RUp2cWRUamhtTWoKMDU4VkFKRHJhaWMrMHhyQlo1QWxJWlFRL21laXltb1c5LzZnM1gxUkJlRWNOdjVwTWo0UWRub3gyOHptQllHRwpSdUFoTWd5UzBMbWlwcWM0a25rdVF4c1NKZ2dvV1VQL0kwa2VkRlVMaTdlcUx3SURBUUFCb3pVd016QXhCZ05WCkhSRUVLakFvZ2dsc2IyTmhiR2h2YzNTQ0NXUmhjSEI1Ym05a1pZSVFaR0Z3Y0hsaVpYUmhibVYwZDI5eWF6QU4KQmdrcWhraUc5dzBCQVFzRkFBT0NBUUVBSmh2RjlZNm5EOEtkajY5WVZ0MThFaWxzRk4vL1NUbjNibCtnWVY3dwpwcUxCTTJYNDNCeWRnS2dmNWF3c2xGbEthNi9CWk5KNThhcXk5NHBXRSsvSEMyTHNKNGt1NHJOZThPbUY5Vi9aCjc2eXlEZk9mY1BhK0JCRFphOGo5VUZBQ1VXS0RVY2x0UDZ4dWFRZnVWT0JDWDBhVEtCRmgyMUxBQkUzU0JEbEkKL1owckphanREaVd3MzQvVzdMbVpZTzJlSE5kQTRWVjd1cXNvUVZCN2s1aktRZU4xY0Q5Q292UTZ1VDRwYmtYVgpiSUxuM3RWbkJqdVcxajAvbWVnUnNkVlJkRTJQcXNJa1BIeHNFZ0lBNGNVOTdIM3FYaVQycUhrcng2NWVZNGZFCm9PdXlzejd4bWIrVkVscWFLVFdHSlhLS0MrM0lFdjhxbzNDWTFHZGM5VWFCOVE9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0t',
    },
  ],
  gamma: [
    {
      ip: '195.154.71.146',
      port: '443',
      hostname: 'fabco.gamma.dappy',
      scheme: 'https',
      caCert:
        'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUM3VENDQWRXZ0F3SUJBZ0lKQU9MRGlMNHYrUFc1TUEwR0NTcUdTSWIzRFFFQkN3VUFNQm94R0RBV0JnTlYKQkFNTUR6eEVRVkJRV1Y5T1JWUlhUMUpMUGpBZUZ3MHlNakEwTVRrd05qVTFORFphRncwek1EQTNNRFl3TmpVMQpORFphTUJveEdEQVdCZ05WQkFNTUR6eEVRVkJRV1Y5T1JWUlhUMUpMUGpDQ0FTSXdEUVlKS29aSWh2Y05BUUVCCkJRQURnZ0VQQURDQ0FRb0NnZ0VCQU4rWlpqblJKKzhmUC90dFY5V0E3ckllUGJ0NUJXbU0zcGROOTZQNVZ4eGEKbGFGUzMwbE03SEk1RXRsdXo2MkZ4aUZHdDYzMHBZektiMFpwZ3hsKytTN05NNzNwVmlEMHdvcFRhZnZFQU5UbApHeUcxeWptQ0hicEZnSi9RU0RjcFl4VHdnVmRoQ1pkUFRnenBTUUluVndWOGFFTmZRQzNYc2dFeTI0M0dDZ3pxCjVVVnVrV1piWXR1OUoyZmlHb0pNbmJvaGQ5ajBBYmJHZTFuKzd3bXgwd1VJbHB1UEFVY0YwTVNNSjdsRDlIQXUKSDZMaXpzaXhTcUYvcjM3WnFydjJrei9qYkpZRGNDSm01eGVMRG9IdkR6ZkFTQjRNUnF5VzhpcXIzdEp4cE9icQpWMDFIZ21yVE5qb2w4NnhDaU1tVGFLSzFPaDBXM2lxSWtoQXZzMXl0ejhzQ0F3RUFBYU0yTURRd01nWURWUjBSCkJDc3dLWUlKYkc5allXeG9iM04wZ2dsa1lYQndlVzV2WkdXQ0VXWmhZbU52TG1kaGJXMWhMbVJoY0hCNU1BMEcKQ1NxR1NJYjNEUUVCQ3dVQUE0SUJBUUJRQ0ZKdGFlckZlNS9SS1hsbTJLU3c0MExLTnZJdXhmd214b0d3cEkycAorTGdoamJtUHNYcEVVUGFOZkVteU9yQVU0aWVLQjU3NVV3ek1NWmtkVG82UXNnU0NQeno2VFdPaW5Mek1mbGRUCit3bkNudTdVMERBTkU3UUZ5Uldrc1VnZVUvSE5acDA1clFXNEwrdXRmUTRlODM1MEtQQXE2MjVVbE5OZzNYZGIKUEJ0QzgxQU5qQmltb2dkamVKbjN6U0FLRGQxdmFLeUZlWkIrRGFtMDhoQkZXRzhvWG1YREgvZDQ2VWZCTVhwLwptY0xRTGZVN05qdncydXIydjQ0Qm40dzlvUjBrU2tTRDEzeW94ZlBXaWwxNThxbkI2NUIrYXZUelIrZFRWR3BrCmxCZS9WUmsrQVpTTW40cDREM2JSOFZLR2d5cG83YmpyS3B4Y05xR3UzK3gzCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0',
    },
  ],
};
