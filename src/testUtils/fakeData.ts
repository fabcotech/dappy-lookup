import {
  DappyRecord,
  DappyNetworkMember,
  DappyNodeErrorResponse,
  DappyNodeSuccessResponse,
} from '../types';
import { mergeDeep } from './mergeDeep';

export const createDappyRecord = (
  record: Partial<DappyRecord> = {},
): DappyRecord =>
  mergeDeep(
    {
      values: [
        {
          value: '127.0.0.1',
          kind: 'IPv4',
        },
      ],
      ca: ['123456789ABCDEF', '123456789ABCDEF'],
    },
    record,
  );

export const getFakeDappyNetworkInfo = (
  networkInfo: Partial<DappyNetworkMember> = {},
): DappyNetworkMember =>
  mergeDeep(
    {
      scheme: 'https',
      hostname: 'dappy.dev',
      ip: '127.0.0.1',
      port: '443',
      caCert:
        'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUZDRENDQTNDZ0F3SUJBZ0lSQUtyMW1jV3dOR0xhUEQxdzV6anVCS3N3RFFZSktvWklodmNOQVFFTEJRQXcKZ1pzeEhqQWNCZ05WQkFvVEZXMXJZMlZ5ZENCa1pYWmxiRzl3YldWdWRDQkRRVEU0TURZR0ExVUVDd3d2Y0dGMQpiRzExYzNOdlFHMWhZMkp2YjJzdGNISnZMV1JsTFhCaGRXd3VhRzl0WlNBb1VHRjFiQ0JOZFhOemJ5a3hQekE5CkJnTlZCQU1NTm0xclkyVnlkQ0J3WVhWc2JYVnpjMjlBYldGalltOXZheTF3Y204dFpHVXRjR0YxYkM1b2IyMWwKSUNoUVlYVnNJRTExYzNOdktUQWVGdzB4T1RFeU1qSXhNekl3TkRCYUZ3MHlPVEV5TWpJeE16SXdOREJhTUlHYgpNUjR3SEFZRFZRUUtFeFZ0YTJObGNuUWdaR1YyWld4dmNHMWxiblFnUTBFeE9EQTJCZ05WQkFzTUwzQmhkV3h0CmRYTnpiMEJ0WVdOaWIyOXJMWEJ5Ynkxa1pTMXdZWFZzTG1odmJXVWdLRkJoZFd3Z1RYVnpjMjhwTVQ4d1BRWUQKVlFRREREWnRhMk5sY25RZ2NHRjFiRzExYzNOdlFHMWhZMkp2YjJzdGNISnZMV1JsTFhCaGRXd3VhRzl0WlNBbwpVR0YxYkNCTmRYTnpieWt3Z2dHaU1BMEdDU3FHU0liM0RRRUJBUVVBQTRJQmp3QXdnZ0dLQW9JQmdRQ3I4TDcxCmNsNVd4eDY3dHpDTzNsbTFXdEx3YUlmK2VxYldSa2ZvT2hJQUxBWlpQOVNlWWpzSk9JNUVOWTNqL0FZYUZwTkcKTFBSTm9Sa0ZLdUY1WEhDNjQ4eWJleFFOMDg4T1pDRlZOOWsrSW5YSVNiYldCQUI2UE5XNitQb2JiNzJJR2lTYgp5Z1FWN0hhckJxTjFMMUpIZHVKbUVqZkVwU1BDaDM0QzhjSTZxU3JLc3RMQVRsQUIzNnYxWFA1RGlZSllieDV4Cnc4aG4veXlQZHVqa2dqQWFUeUc4ZGV0bm5wR2JMZjl6N2ZqZWY4NzRGdG82VDZndHM4VVYyNmQ5bU5UbjEvZ3MKMStmVlY0S29IWmM1N3Jlb3UyRGVHMlNzQ2UwemwwaEpNQm5iNStzcmIxZ3JtUXViZG11S3o5YUEvK1NjNUtUUQpMU1hGZG8wZDBRWmprMExwMlE4NlhhV0xVMVluMllhS1RLbmVvNjFhZ2ZEaHBmY1NKSlMzYldVSWRZUGd5dWZUCmNoUjR3VEFaZGZMZGFNS1M3TFI1SnlqNGJpNlUxUnBVYzFkaEFxbWNsMmxSQVRsUUFwU1pQRk5RTXh0TVE0VUYKZHFIeFo0U0NyaFd4M0hXYnZxS2VqMGxReTI2MjIwaERDWCsrRC9kTnJCWW5mc1pGRks5UEhsNmdaTThDQXdFQQpBYU5GTUVNd0RnWURWUjBQQVFIL0JBUURBZ0lFTUJJR0ExVWRFd0VCL3dRSU1BWUJBZjhDQVFBd0hRWURWUjBPCkJCWUVGQlUyaDF2YnY3M25iRm1FdzE4amJjKzJiYk9xTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCZ1FDZ1ltZW8KR3cxanlrRnpuQmpHV3N2aW9kY3cxMmxPQUpmWHhoWUpDZHNMMng3cFdiTEtER2dhOEZEeGk2NktOSDVhaGhXbApiaFJ6TW9SYldiVDE0ZXkxbk9IVWJ3SVI2dy81TVo2cmZ0Zk9oK0NXR05xWlo0TzMyaTZvMVNsdFE3YXJTZmVXCjZLNlMwTi9LeXlSeHpqQTAwdXlJeXdnYXRoaHBTaXgwaHU4c0c4eGZCU3NIRmZVSTVqdDM4cGs2UlhYSlEvR1IKR2IwNEUwYUFBNld0NUtmT243RlJZMkJjSDcvN3VzWHYrZVpIMWVpRlFid2xVVk1HOG9hbVFYeUtlQnVCelJIRwpBdGNFeFRybjE3QUVsVDA2amJFVDB6dUNpZ3dUQTVlR3NVa3Q5Z3pLNFcyR2JkdGpvTHd2azNNbGR2OFhsSEhjClRZamloem5yMForRWdOdUI5OHVudW8xL0pueFBCQ1o0RWZ6dkphTUVQZE4yRmV4ZGRyNGlsQkc0TjZ1VVJ2NDkKTzFlWGtRWHFYTXorSU9GUUpHTC94a3BFV01rT3RRbEpabXFqK0ttbWNZWEVQWVU0ZEs4VkFIa29YSUdpVmtlUAowK2NLZEd0eS9maWpwNEpEWnFZMTRGZW9zYnI4ZVkzZ2xnN3NJb3pCK25LdnhodC9DWThlVWorK3pmRT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=',
    },
    networkInfo,
  );

export const fakeDappyNodeSuccessResponse = (
  successResponse: Partial<DappyNodeSuccessResponse> = {},
): DappyNodeSuccessResponse =>
  mergeDeep(
    {
      success: true,
      records: [
        {
          data: JSON.stringify(createDappyRecord()),
        },
      ],
    },
    successResponse,
  );

export const fakeDappyNodeErrorResponse = (
  errorResponse: Partial<DappyNodeErrorResponse> = {},
): DappyNodeErrorResponse =>
  mergeDeep(
    {
      success: false,
      error: {
        message: 'fake error',
      },
    },
    errorResponse,
  );