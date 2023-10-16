/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions, RequestOptions } from './roq-sdk';

export function useDocumentFindMany<
  T extends Prisma.documentFindManyArgs,
  R extends GetFindResult<Prisma.$documentPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.documentFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useDocumentFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.document.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useDocumentCount<T extends Prisma.documentCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.documentCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useDocumentCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.document.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useDocumentFindManyWithCount<
  T extends Prisma.documentFindManyArgs,
  R extends { data: GetFindResult<Prisma.$documentPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.documentFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useDocumentFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.document.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useDocumentFindFirst<
  T extends Prisma.documentFindFirstArgs,
  R extends GetFindResult<Prisma.$documentPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.documentFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useDocumentFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.document.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useEmailLogsFindMany<
  T extends Prisma.email_logsFindManyArgs,
  R extends GetFindResult<Prisma.$email_logsPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.email_logsFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useEmailLogsFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.email_logs.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useEmailLogsCount<T extends Prisma.email_logsCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.email_logsCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useEmailLogsCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.email_logs.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useEmailLogsFindManyWithCount<
  T extends Prisma.email_logsFindManyArgs,
  R extends { data: GetFindResult<Prisma.$email_logsPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.email_logsFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useEmailLogsFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.email_logs.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useEmailLogsFindFirst<
  T extends Prisma.email_logsFindFirstArgs,
  R extends GetFindResult<Prisma.$email_logsPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.email_logsFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useEmailLogsFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.email_logs.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useItSupportFindMany<
  T extends Prisma.it_supportFindManyArgs,
  R extends GetFindResult<Prisma.$it_supportPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.it_supportFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useItSupportFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.it_support.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useItSupportCount<T extends Prisma.it_supportCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.it_supportCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useItSupportCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.it_support.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useItSupportFindManyWithCount<
  T extends Prisma.it_supportFindManyArgs,
  R extends { data: GetFindResult<Prisma.$it_supportPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.it_supportFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useItSupportFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.it_support.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useItSupportFindFirst<
  T extends Prisma.it_supportFindFirstArgs,
  R extends GetFindResult<Prisma.$it_supportPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.it_supportFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useItSupportFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.it_support.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationFindMany<
  T extends Prisma.organizationFindManyArgs,
  R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOrganizationFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.organization.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationCount<T extends Prisma.organizationCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.organizationCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOrganizationCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.organization.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationFindManyWithCount<
  T extends Prisma.organizationFindManyArgs,
  R extends { data: GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOrganizationFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.organization.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOrganizationFindFirst<
  T extends Prisma.organizationFindFirstArgs,
  R extends GetFindResult<Prisma.$organizationPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.organizationFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOrganizationFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.organization.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSearchFindMany<
  T extends Prisma.searchFindManyArgs,
  R extends GetFindResult<Prisma.$searchPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.searchFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSearchFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.search.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSearchCount<T extends Prisma.searchCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.searchCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSearchCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.search.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSearchFindManyWithCount<
  T extends Prisma.searchFindManyArgs,
  R extends { data: GetFindResult<Prisma.$searchPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.searchFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSearchFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.search.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSearchFindFirst<
  T extends Prisma.searchFindFirstArgs,
  R extends GetFindResult<Prisma.$searchPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.searchFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSearchFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.search.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
