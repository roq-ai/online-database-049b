/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model document
 *
 */
export type document = $Result.DefaultSelection<Prisma.$documentPayload>;
/**
 * Model email_logs
 *
 */
export type email_logs = $Result.DefaultSelection<Prisma.$email_logsPayload>;
/**
 * Model it_support
 *
 */
export type it_support = $Result.DefaultSelection<Prisma.$it_supportPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model search
 *
 */
export type search = $Result.DefaultSelection<Prisma.$searchPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.document.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **document** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
   * ```
   */
  get document(): Prisma.documentDelegate<ExtArgs>;

  /**
   * `prisma.email_logs`: Exposes CRUD operations for the **email_logs** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Email_logs
   * const email_logs = await prisma.email_logs.findMany()
   * ```
   */
  get email_logs(): Prisma.email_logsDelegate<ExtArgs>;

  /**
   * `prisma.it_support`: Exposes CRUD operations for the **it_support** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more It_supports
   * const it_supports = await prisma.it_support.findMany()
   * ```
   */
  get it_support(): Prisma.it_supportDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.search`: Exposes CRUD operations for the **search** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Searches
   * const searches = await prisma.search.findMany()
   * ```
   */
  get search(): Prisma.searchDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    document: 'document';
    email_logs: 'email_logs';
    it_support: 'it_support';
    organization: 'organization';
    search: 'search';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'document' | 'email_logs' | 'it_support' | 'organization' | 'search' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      document: {
        payload: Prisma.$documentPayload<ExtArgs>;
        fields: Prisma.documentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.documentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.documentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload>;
          };
          findFirst: {
            args: Prisma.documentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.documentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload>;
          };
          findMany: {
            args: Prisma.documentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload>[];
          };
          create: {
            args: Prisma.documentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload>;
          };
          createMany: {
            args: Prisma.documentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.documentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload>;
          };
          update: {
            args: Prisma.documentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload>;
          };
          deleteMany: {
            args: Prisma.documentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.documentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.documentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentPayload>;
          };
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDocument>;
          };
          groupBy: {
            args: Prisma.documentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DocumentGroupByOutputType>[];
          };
          count: {
            args: Prisma.documentCountArgs<ExtArgs>;
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number;
          };
        };
      };
      email_logs: {
        payload: Prisma.$email_logsPayload<ExtArgs>;
        fields: Prisma.email_logsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.email_logsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.email_logsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>;
          };
          findFirst: {
            args: Prisma.email_logsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.email_logsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>;
          };
          findMany: {
            args: Prisma.email_logsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>[];
          };
          create: {
            args: Prisma.email_logsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>;
          };
          createMany: {
            args: Prisma.email_logsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.email_logsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>;
          };
          update: {
            args: Prisma.email_logsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>;
          };
          deleteMany: {
            args: Prisma.email_logsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.email_logsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.email_logsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$email_logsPayload>;
          };
          aggregate: {
            args: Prisma.Email_logsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmail_logs>;
          };
          groupBy: {
            args: Prisma.email_logsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Email_logsGroupByOutputType>[];
          };
          count: {
            args: Prisma.email_logsCountArgs<ExtArgs>;
            result: $Utils.Optional<Email_logsCountAggregateOutputType> | number;
          };
        };
      };
      it_support: {
        payload: Prisma.$it_supportPayload<ExtArgs>;
        fields: Prisma.it_supportFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.it_supportFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.it_supportFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload>;
          };
          findFirst: {
            args: Prisma.it_supportFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.it_supportFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload>;
          };
          findMany: {
            args: Prisma.it_supportFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload>[];
          };
          create: {
            args: Prisma.it_supportCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload>;
          };
          createMany: {
            args: Prisma.it_supportCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.it_supportDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload>;
          };
          update: {
            args: Prisma.it_supportUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload>;
          };
          deleteMany: {
            args: Prisma.it_supportDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.it_supportUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.it_supportUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$it_supportPayload>;
          };
          aggregate: {
            args: Prisma.It_supportAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIt_support>;
          };
          groupBy: {
            args: Prisma.it_supportGroupByArgs<ExtArgs>;
            result: $Utils.Optional<It_supportGroupByOutputType>[];
          };
          count: {
            args: Prisma.it_supportCountArgs<ExtArgs>;
            result: $Utils.Optional<It_supportCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      search: {
        payload: Prisma.$searchPayload<ExtArgs>;
        fields: Prisma.searchFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.searchFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.searchFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload>;
          };
          findFirst: {
            args: Prisma.searchFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.searchFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload>;
          };
          findMany: {
            args: Prisma.searchFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload>[];
          };
          create: {
            args: Prisma.searchCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload>;
          };
          createMany: {
            args: Prisma.searchCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.searchDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload>;
          };
          update: {
            args: Prisma.searchUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload>;
          };
          deleteMany: {
            args: Prisma.searchDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.searchUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.searchUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$searchPayload>;
          };
          aggregate: {
            args: Prisma.SearchAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSearch>;
          };
          groupBy: {
            args: Prisma.searchGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SearchGroupByOutputType>[];
          };
          count: {
            args: Prisma.searchCountArgs<ExtArgs>;
            result: $Utils.Optional<SearchCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    search: number;
  };

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    search?: boolean | DocumentCountOutputTypeCountSearchArgs;
  };

  // Custom InputTypes

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountSearchArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: searchWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    document: number;
    search: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | OrganizationCountOutputTypeCountDocumentArgs;
    search?: boolean | OrganizationCountOutputTypeCountSearchArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDocumentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: documentWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSearchArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: searchWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    document: number;
    email_logs: number;
    it_support: number;
    organization: number;
    search: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UserCountOutputTypeCountDocumentArgs;
    email_logs?: boolean | UserCountOutputTypeCountEmail_logsArgs;
    it_support?: boolean | UserCountOutputTypeCountIt_supportArgs;
    organization?: boolean | UserCountOutputTypeCountOrganizationArgs;
    search?: boolean | UserCountOutputTypeCountSearchArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: documentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmail_logsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: email_logsWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIt_supportArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: it_supportWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: organizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: searchWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
  };

  export type DocumentMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    document_type: string | null;
    status: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DocumentMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    document_type: string | null;
    status: string | null;
    user_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DocumentCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    document_type: number;
    status: number;
    user_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DocumentMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    document_type?: true;
    status?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DocumentMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    document_type?: true;
    status?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DocumentCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    document_type?: true;
    status?: true;
    user_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document to aggregate.
     */
    where?: documentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: documentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned documents
     **/
    _count?: true | DocumentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DocumentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DocumentMaxAggregateInputType;
  };

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>;
  };

  export type documentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentWhereInput;
    orderBy?: documentOrderByWithAggregationInput | documentOrderByWithAggregationInput[];
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum;
    having?: documentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInputType | true;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
  };

  export type DocumentGroupByOutputType = {
    id: string;
    title: string;
    content: string;
    document_type: string | null;
    status: string | null;
    user_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: DocumentCountAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
  };

  type GetDocumentGroupByPayload<T extends documentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DocumentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
          : GetScalarType<T[P], DocumentGroupByOutputType[P]>;
      }
    >
  >;

  export type documentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        content?: boolean;
        document_type?: boolean;
        status?: boolean;
        user_id?: boolean;
        organization_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        search?: boolean | document$searchArgs<ExtArgs>;
        _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['document']
    >;

  export type documentSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    document_type?: boolean;
    status?: boolean;
    user_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type documentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    search?: boolean | document$searchArgs<ExtArgs>;
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $documentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'document';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      search: Prisma.$searchPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        content: string;
        document_type: string | null;
        status: string | null;
        user_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['document']
    >;
    composites: {};
  };

  type documentGetPayload<S extends boolean | null | undefined | documentDefaultArgs> = $Result.GetResult<
    Prisma.$documentPayload,
    S
  >;

  type documentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    documentFindManyArgs,
    'select' | 'include'
  > & {
    select?: DocumentCountAggregateInputType | true;
  };

  export interface documentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document']; meta: { name: 'document' } };
    /**
     * Find zero or one Document that matches the filter.
     * @param {documentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends documentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, documentFindUniqueArgs<ExtArgs>>,
    ): Prisma__documentClient<
      $Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Document that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {documentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends documentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__documentClient<
      $Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends documentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, documentFindFirstArgs<ExtArgs>>,
    ): Prisma__documentClient<
      $Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends documentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__documentClient<
      $Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     *
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends documentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Document.
     * @param {documentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     *
     **/
    create<T extends documentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, documentCreateArgs<ExtArgs>>,
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Documents.
     *     @param {documentCreateManyArgs} args - Arguments to create many Documents.
     *     @example
     *     // Create many Documents
     *     const document = await prisma.document.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends documentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Document.
     * @param {documentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     *
     **/
    delete<T extends documentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, documentDeleteArgs<ExtArgs>>,
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Document.
     * @param {documentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends documentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, documentUpdateArgs<ExtArgs>>,
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Documents.
     * @param {documentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends documentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends documentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, documentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Document.
     * @param {documentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     **/
    upsert<T extends documentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, documentUpsertArgs<ExtArgs>>,
    ): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
     **/
    count<T extends documentCountArgs>(
      args?: Subset<T, documentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DocumentAggregateArgs>(
      args: Subset<T, DocumentAggregateArgs>,
    ): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends documentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentGroupByArgs['orderBy'] }
        : { orderBy?: documentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, documentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the document model
     */
    readonly fields: documentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    search<T extends document$searchArgs<ExtArgs> = {}>(
      args?: Subset<T, document$searchArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the document model
   */
  interface documentFieldRefs {
    readonly id: FieldRef<'document', 'String'>;
    readonly title: FieldRef<'document', 'String'>;
    readonly content: FieldRef<'document', 'String'>;
    readonly document_type: FieldRef<'document', 'String'>;
    readonly status: FieldRef<'document', 'String'>;
    readonly user_id: FieldRef<'document', 'String'>;
    readonly organization_id: FieldRef<'document', 'String'>;
    readonly created_at: FieldRef<'document', 'DateTime'>;
    readonly updated_at: FieldRef<'document', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * document findUnique
   */
  export type documentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * Filter, which document to fetch.
     */
    where: documentWhereUniqueInput;
  };

  /**
   * document findUniqueOrThrow
   */
  export type documentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * Filter, which document to fetch.
     */
    where: documentWhereUniqueInput;
  };

  /**
   * document findFirst
   */
  export type documentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * Filter, which document to fetch.
     */
    where?: documentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for documents.
     */
    cursor?: documentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
  };

  /**
   * document findFirstOrThrow
   */
  export type documentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * Filter, which document to fetch.
     */
    where?: documentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for documents.
     */
    cursor?: documentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
  };

  /**
   * document findMany
   */
  export type documentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * Filter, which documents to fetch.
     */
    where?: documentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing documents.
     */
    cursor?: documentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documents.
     */
    skip?: number;
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
  };

  /**
   * document create
   */
  export type documentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * The data needed to create a document.
     */
    data: XOR<documentCreateInput, documentUncheckedCreateInput>;
  };

  /**
   * document createMany
   */
  export type documentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentCreateManyInput | documentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * document update
   */
  export type documentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * The data needed to update a document.
     */
    data: XOR<documentUpdateInput, documentUncheckedUpdateInput>;
    /**
     * Choose, which document to update.
     */
    where: documentWhereUniqueInput;
  };

  /**
   * document updateMany
   */
  export type documentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyInput>;
    /**
     * Filter which documents to update
     */
    where?: documentWhereInput;
  };

  /**
   * document upsert
   */
  export type documentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * The filter to search for the document to update in case it exists.
     */
    where: documentWhereUniqueInput;
    /**
     * In case the document found by the `where` argument doesn't exist, create a new document with this data.
     */
    create: XOR<documentCreateInput, documentUncheckedCreateInput>;
    /**
     * In case the document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentUpdateInput, documentUncheckedUpdateInput>;
  };

  /**
   * document delete
   */
  export type documentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    /**
     * Filter which document to delete.
     */
    where: documentWhereUniqueInput;
  };

  /**
   * document deleteMany
   */
  export type documentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentWhereInput;
  };

  /**
   * document.search
   */
  export type document$searchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    where?: searchWhereInput;
    orderBy?: searchOrderByWithRelationInput | searchOrderByWithRelationInput[];
    cursor?: searchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[];
  };

  /**
   * document without action
   */
  export type documentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
  };

  /**
   * Model email_logs
   */

  export type AggregateEmail_logs = {
    _count: Email_logsCountAggregateOutputType | null;
    _min: Email_logsMinAggregateOutputType | null;
    _max: Email_logsMaxAggregateOutputType | null;
  };

  export type Email_logsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    email_subject: string | null;
    email_body: string | null;
    sent_at: Date | null;
    status: string | null;
    recipient_email: string | null;
    sender_email: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Email_logsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    email_subject: string | null;
    email_body: string | null;
    sent_at: Date | null;
    status: string | null;
    recipient_email: string | null;
    sender_email: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Email_logsCountAggregateOutputType = {
    id: number;
    user_id: number;
    email_subject: number;
    email_body: number;
    sent_at: number;
    status: number;
    recipient_email: number;
    sender_email: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Email_logsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    email_subject?: true;
    email_body?: true;
    sent_at?: true;
    status?: true;
    recipient_email?: true;
    sender_email?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Email_logsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    email_subject?: true;
    email_body?: true;
    sent_at?: true;
    status?: true;
    recipient_email?: true;
    sender_email?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Email_logsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    email_subject?: true;
    email_body?: true;
    sent_at?: true;
    status?: true;
    recipient_email?: true;
    sender_email?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Email_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_logs to aggregate.
     */
    where?: email_logsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of email_logs to fetch.
     */
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: email_logsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` email_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` email_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned email_logs
     **/
    _count?: true | Email_logsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Email_logsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Email_logsMaxAggregateInputType;
  };

  export type GetEmail_logsAggregateType<T extends Email_logsAggregateArgs> = {
    [P in keyof T & keyof AggregateEmail_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail_logs[P]>
      : GetScalarType<T[P], AggregateEmail_logs[P]>;
  };

  export type email_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: email_logsWhereInput;
    orderBy?: email_logsOrderByWithAggregationInput | email_logsOrderByWithAggregationInput[];
    by: Email_logsScalarFieldEnum[] | Email_logsScalarFieldEnum;
    having?: email_logsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Email_logsCountAggregateInputType | true;
    _min?: Email_logsMinAggregateInputType;
    _max?: Email_logsMaxAggregateInputType;
  };

  export type Email_logsGroupByOutputType = {
    id: string;
    user_id: string;
    email_subject: string;
    email_body: string;
    sent_at: Date;
    status: string;
    recipient_email: string;
    sender_email: string;
    created_at: Date;
    updated_at: Date;
    _count: Email_logsCountAggregateOutputType | null;
    _min: Email_logsMinAggregateOutputType | null;
    _max: Email_logsMaxAggregateOutputType | null;
  };

  type GetEmail_logsGroupByPayload<T extends email_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Email_logsGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Email_logsGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Email_logsGroupByOutputType[P]>
          : GetScalarType<T[P], Email_logsGroupByOutputType[P]>;
      }
    >
  >;

  export type email_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        email_subject?: boolean;
        email_body?: boolean;
        sent_at?: boolean;
        status?: boolean;
        recipient_email?: boolean;
        sender_email?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['email_logs']
    >;

  export type email_logsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    email_subject?: boolean;
    email_body?: boolean;
    sent_at?: boolean;
    status?: boolean;
    recipient_email?: boolean;
    sender_email?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type email_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $email_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'email_logs';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        email_subject: string;
        email_body: string;
        sent_at: Date;
        status: string;
        recipient_email: string;
        sender_email: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['email_logs']
    >;
    composites: {};
  };

  type email_logsGetPayload<S extends boolean | null | undefined | email_logsDefaultArgs> = $Result.GetResult<
    Prisma.$email_logsPayload,
    S
  >;

  type email_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    email_logsFindManyArgs,
    'select' | 'include'
  > & {
    select?: Email_logsCountAggregateInputType | true;
  };

  export interface email_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['email_logs']; meta: { name: 'email_logs' } };
    /**
     * Find zero or one Email_logs that matches the filter.
     * @param {email_logsFindUniqueArgs} args - Arguments to find a Email_logs
     * @example
     * // Get one Email_logs
     * const email_logs = await prisma.email_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends email_logsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, email_logsFindUniqueArgs<ExtArgs>>,
    ): Prisma__email_logsClient<
      $Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Email_logs that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {email_logsFindUniqueOrThrowArgs} args - Arguments to find a Email_logs
     * @example
     * // Get one Email_logs
     * const email_logs = await prisma.email_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends email_logsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, email_logsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__email_logsClient<
      $Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Email_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsFindFirstArgs} args - Arguments to find a Email_logs
     * @example
     * // Get one Email_logs
     * const email_logs = await prisma.email_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends email_logsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, email_logsFindFirstArgs<ExtArgs>>,
    ): Prisma__email_logsClient<
      $Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Email_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsFindFirstOrThrowArgs} args - Arguments to find a Email_logs
     * @example
     * // Get one Email_logs
     * const email_logs = await prisma.email_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends email_logsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, email_logsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__email_logsClient<
      $Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Email_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Email_logs
     * const email_logs = await prisma.email_logs.findMany()
     *
     * // Get first 10 Email_logs
     * const email_logs = await prisma.email_logs.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const email_logsWithIdOnly = await prisma.email_logs.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends email_logsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, email_logsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Email_logs.
     * @param {email_logsCreateArgs} args - Arguments to create a Email_logs.
     * @example
     * // Create one Email_logs
     * const Email_logs = await prisma.email_logs.create({
     *   data: {
     *     // ... data to create a Email_logs
     *   }
     * })
     *
     **/
    create<T extends email_logsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, email_logsCreateArgs<ExtArgs>>,
    ): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Email_logs.
     *     @param {email_logsCreateManyArgs} args - Arguments to create many Email_logs.
     *     @example
     *     // Create many Email_logs
     *     const email_logs = await prisma.email_logs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends email_logsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, email_logsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Email_logs.
     * @param {email_logsDeleteArgs} args - Arguments to delete one Email_logs.
     * @example
     * // Delete one Email_logs
     * const Email_logs = await prisma.email_logs.delete({
     *   where: {
     *     // ... filter to delete one Email_logs
     *   }
     * })
     *
     **/
    delete<T extends email_logsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, email_logsDeleteArgs<ExtArgs>>,
    ): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Email_logs.
     * @param {email_logsUpdateArgs} args - Arguments to update one Email_logs.
     * @example
     * // Update one Email_logs
     * const email_logs = await prisma.email_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends email_logsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, email_logsUpdateArgs<ExtArgs>>,
    ): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Email_logs.
     * @param {email_logsDeleteManyArgs} args - Arguments to filter Email_logs to delete.
     * @example
     * // Delete a few Email_logs
     * const { count } = await prisma.email_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends email_logsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, email_logsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Email_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Email_logs
     * const email_logs = await prisma.email_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends email_logsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, email_logsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Email_logs.
     * @param {email_logsUpsertArgs} args - Arguments to update or create a Email_logs.
     * @example
     * // Update or create a Email_logs
     * const email_logs = await prisma.email_logs.upsert({
     *   create: {
     *     // ... data to create a Email_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email_logs we want to update
     *   }
     * })
     **/
    upsert<T extends email_logsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, email_logsUpsertArgs<ExtArgs>>,
    ): Prisma__email_logsClient<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Email_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsCountArgs} args - Arguments to filter Email_logs to count.
     * @example
     * // Count the number of Email_logs
     * const count = await prisma.email_logs.count({
     *   where: {
     *     // ... the filter for the Email_logs we want to count
     *   }
     * })
     **/
    count<T extends email_logsCountArgs>(
      args?: Subset<T, email_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Email_logsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Email_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Email_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Email_logsAggregateArgs>(
      args: Subset<T, Email_logsAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmail_logsAggregateType<T>>;

    /**
     * Group by Email_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {email_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends email_logsGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: email_logsGroupByArgs['orderBy'] }
        : { orderBy?: email_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, email_logsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmail_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the email_logs model
     */
    readonly fields: email_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for email_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__email_logsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the email_logs model
   */
  interface email_logsFieldRefs {
    readonly id: FieldRef<'email_logs', 'String'>;
    readonly user_id: FieldRef<'email_logs', 'String'>;
    readonly email_subject: FieldRef<'email_logs', 'String'>;
    readonly email_body: FieldRef<'email_logs', 'String'>;
    readonly sent_at: FieldRef<'email_logs', 'DateTime'>;
    readonly status: FieldRef<'email_logs', 'String'>;
    readonly recipient_email: FieldRef<'email_logs', 'String'>;
    readonly sender_email: FieldRef<'email_logs', 'String'>;
    readonly created_at: FieldRef<'email_logs', 'DateTime'>;
    readonly updated_at: FieldRef<'email_logs', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * email_logs findUnique
   */
  export type email_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * Filter, which email_logs to fetch.
     */
    where: email_logsWhereUniqueInput;
  };

  /**
   * email_logs findUniqueOrThrow
   */
  export type email_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * Filter, which email_logs to fetch.
     */
    where: email_logsWhereUniqueInput;
  };

  /**
   * email_logs findFirst
   */
  export type email_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * Filter, which email_logs to fetch.
     */
    where?: email_logsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of email_logs to fetch.
     */
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for email_logs.
     */
    cursor?: email_logsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` email_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` email_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of email_logs.
     */
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[];
  };

  /**
   * email_logs findFirstOrThrow
   */
  export type email_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * Filter, which email_logs to fetch.
     */
    where?: email_logsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of email_logs to fetch.
     */
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for email_logs.
     */
    cursor?: email_logsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` email_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` email_logs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of email_logs.
     */
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[];
  };

  /**
   * email_logs findMany
   */
  export type email_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * Filter, which email_logs to fetch.
     */
    where?: email_logsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of email_logs to fetch.
     */
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing email_logs.
     */
    cursor?: email_logsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` email_logs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` email_logs.
     */
    skip?: number;
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[];
  };

  /**
   * email_logs create
   */
  export type email_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * The data needed to create a email_logs.
     */
    data: XOR<email_logsCreateInput, email_logsUncheckedCreateInput>;
  };

  /**
   * email_logs createMany
   */
  export type email_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many email_logs.
     */
    data: email_logsCreateManyInput | email_logsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * email_logs update
   */
  export type email_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * The data needed to update a email_logs.
     */
    data: XOR<email_logsUpdateInput, email_logsUncheckedUpdateInput>;
    /**
     * Choose, which email_logs to update.
     */
    where: email_logsWhereUniqueInput;
  };

  /**
   * email_logs updateMany
   */
  export type email_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update email_logs.
     */
    data: XOR<email_logsUpdateManyMutationInput, email_logsUncheckedUpdateManyInput>;
    /**
     * Filter which email_logs to update
     */
    where?: email_logsWhereInput;
  };

  /**
   * email_logs upsert
   */
  export type email_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * The filter to search for the email_logs to update in case it exists.
     */
    where: email_logsWhereUniqueInput;
    /**
     * In case the email_logs found by the `where` argument doesn't exist, create a new email_logs with this data.
     */
    create: XOR<email_logsCreateInput, email_logsUncheckedCreateInput>;
    /**
     * In case the email_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<email_logsUpdateInput, email_logsUncheckedUpdateInput>;
  };

  /**
   * email_logs delete
   */
  export type email_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    /**
     * Filter which email_logs to delete.
     */
    where: email_logsWhereUniqueInput;
  };

  /**
   * email_logs deleteMany
   */
  export type email_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which email_logs to delete
     */
    where?: email_logsWhereInput;
  };

  /**
   * email_logs without action
   */
  export type email_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
  };

  /**
   * Model it_support
   */

  export type AggregateIt_support = {
    _count: It_supportCountAggregateOutputType | null;
    _min: It_supportMinAggregateOutputType | null;
    _max: It_supportMaxAggregateOutputType | null;
  };

  export type It_supportMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    issue_description: string | null;
    status: string | null;
    priority: string | null;
    resolved_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type It_supportMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    issue_description: string | null;
    status: string | null;
    priority: string | null;
    resolved_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type It_supportCountAggregateOutputType = {
    id: number;
    user_id: number;
    issue_description: number;
    status: number;
    priority: number;
    resolved_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type It_supportMinAggregateInputType = {
    id?: true;
    user_id?: true;
    issue_description?: true;
    status?: true;
    priority?: true;
    resolved_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type It_supportMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    issue_description?: true;
    status?: true;
    priority?: true;
    resolved_at?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type It_supportCountAggregateInputType = {
    id?: true;
    user_id?: true;
    issue_description?: true;
    status?: true;
    priority?: true;
    resolved_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type It_supportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which it_support to aggregate.
     */
    where?: it_supportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of it_supports to fetch.
     */
    orderBy?: it_supportOrderByWithRelationInput | it_supportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: it_supportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` it_supports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` it_supports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned it_supports
     **/
    _count?: true | It_supportCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: It_supportMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: It_supportMaxAggregateInputType;
  };

  export type GetIt_supportAggregateType<T extends It_supportAggregateArgs> = {
    [P in keyof T & keyof AggregateIt_support]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIt_support[P]>
      : GetScalarType<T[P], AggregateIt_support[P]>;
  };

  export type it_supportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: it_supportWhereInput;
    orderBy?: it_supportOrderByWithAggregationInput | it_supportOrderByWithAggregationInput[];
    by: It_supportScalarFieldEnum[] | It_supportScalarFieldEnum;
    having?: it_supportScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: It_supportCountAggregateInputType | true;
    _min?: It_supportMinAggregateInputType;
    _max?: It_supportMaxAggregateInputType;
  };

  export type It_supportGroupByOutputType = {
    id: string;
    user_id: string;
    issue_description: string;
    status: string;
    priority: string | null;
    resolved_at: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: It_supportCountAggregateOutputType | null;
    _min: It_supportMinAggregateOutputType | null;
    _max: It_supportMaxAggregateOutputType | null;
  };

  type GetIt_supportGroupByPayload<T extends it_supportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<It_supportGroupByOutputType, T['by']> & {
        [P in keyof T & keyof It_supportGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], It_supportGroupByOutputType[P]>
          : GetScalarType<T[P], It_supportGroupByOutputType[P]>;
      }
    >
  >;

  export type it_supportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        issue_description?: boolean;
        status?: boolean;
        priority?: boolean;
        resolved_at?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['it_support']
    >;

  export type it_supportSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    issue_description?: boolean;
    status?: boolean;
    priority?: boolean;
    resolved_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type it_supportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $it_supportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'it_support';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        issue_description: string;
        status: string;
        priority: string | null;
        resolved_at: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['it_support']
    >;
    composites: {};
  };

  type it_supportGetPayload<S extends boolean | null | undefined | it_supportDefaultArgs> = $Result.GetResult<
    Prisma.$it_supportPayload,
    S
  >;

  type it_supportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    it_supportFindManyArgs,
    'select' | 'include'
  > & {
    select?: It_supportCountAggregateInputType | true;
  };

  export interface it_supportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['it_support']; meta: { name: 'it_support' } };
    /**
     * Find zero or one It_support that matches the filter.
     * @param {it_supportFindUniqueArgs} args - Arguments to find a It_support
     * @example
     * // Get one It_support
     * const it_support = await prisma.it_support.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends it_supportFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, it_supportFindUniqueArgs<ExtArgs>>,
    ): Prisma__it_supportClient<
      $Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one It_support that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {it_supportFindUniqueOrThrowArgs} args - Arguments to find a It_support
     * @example
     * // Get one It_support
     * const it_support = await prisma.it_support.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends it_supportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, it_supportFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__it_supportClient<
      $Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first It_support that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {it_supportFindFirstArgs} args - Arguments to find a It_support
     * @example
     * // Get one It_support
     * const it_support = await prisma.it_support.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends it_supportFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, it_supportFindFirstArgs<ExtArgs>>,
    ): Prisma__it_supportClient<
      $Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first It_support that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {it_supportFindFirstOrThrowArgs} args - Arguments to find a It_support
     * @example
     * // Get one It_support
     * const it_support = await prisma.it_support.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends it_supportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, it_supportFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__it_supportClient<
      $Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more It_supports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {it_supportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all It_supports
     * const it_supports = await prisma.it_support.findMany()
     *
     * // Get first 10 It_supports
     * const it_supports = await prisma.it_support.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const it_supportWithIdOnly = await prisma.it_support.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends it_supportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, it_supportFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a It_support.
     * @param {it_supportCreateArgs} args - Arguments to create a It_support.
     * @example
     * // Create one It_support
     * const It_support = await prisma.it_support.create({
     *   data: {
     *     // ... data to create a It_support
     *   }
     * })
     *
     **/
    create<T extends it_supportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, it_supportCreateArgs<ExtArgs>>,
    ): Prisma__it_supportClient<$Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many It_supports.
     *     @param {it_supportCreateManyArgs} args - Arguments to create many It_supports.
     *     @example
     *     // Create many It_supports
     *     const it_support = await prisma.it_support.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends it_supportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, it_supportCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a It_support.
     * @param {it_supportDeleteArgs} args - Arguments to delete one It_support.
     * @example
     * // Delete one It_support
     * const It_support = await prisma.it_support.delete({
     *   where: {
     *     // ... filter to delete one It_support
     *   }
     * })
     *
     **/
    delete<T extends it_supportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, it_supportDeleteArgs<ExtArgs>>,
    ): Prisma__it_supportClient<$Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one It_support.
     * @param {it_supportUpdateArgs} args - Arguments to update one It_support.
     * @example
     * // Update one It_support
     * const it_support = await prisma.it_support.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends it_supportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, it_supportUpdateArgs<ExtArgs>>,
    ): Prisma__it_supportClient<$Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more It_supports.
     * @param {it_supportDeleteManyArgs} args - Arguments to filter It_supports to delete.
     * @example
     * // Delete a few It_supports
     * const { count } = await prisma.it_support.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends it_supportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, it_supportDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more It_supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {it_supportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many It_supports
     * const it_support = await prisma.it_support.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends it_supportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, it_supportUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one It_support.
     * @param {it_supportUpsertArgs} args - Arguments to update or create a It_support.
     * @example
     * // Update or create a It_support
     * const it_support = await prisma.it_support.upsert({
     *   create: {
     *     // ... data to create a It_support
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the It_support we want to update
     *   }
     * })
     **/
    upsert<T extends it_supportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, it_supportUpsertArgs<ExtArgs>>,
    ): Prisma__it_supportClient<$Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of It_supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {it_supportCountArgs} args - Arguments to filter It_supports to count.
     * @example
     * // Count the number of It_supports
     * const count = await prisma.it_support.count({
     *   where: {
     *     // ... the filter for the It_supports we want to count
     *   }
     * })
     **/
    count<T extends it_supportCountArgs>(
      args?: Subset<T, it_supportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], It_supportCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a It_support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {It_supportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends It_supportAggregateArgs>(
      args: Subset<T, It_supportAggregateArgs>,
    ): Prisma.PrismaPromise<GetIt_supportAggregateType<T>>;

    /**
     * Group by It_support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {it_supportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends it_supportGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: it_supportGroupByArgs['orderBy'] }
        : { orderBy?: it_supportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, it_supportGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetIt_supportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the it_support model
     */
    readonly fields: it_supportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for it_support.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__it_supportClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the it_support model
   */
  interface it_supportFieldRefs {
    readonly id: FieldRef<'it_support', 'String'>;
    readonly user_id: FieldRef<'it_support', 'String'>;
    readonly issue_description: FieldRef<'it_support', 'String'>;
    readonly status: FieldRef<'it_support', 'String'>;
    readonly priority: FieldRef<'it_support', 'String'>;
    readonly resolved_at: FieldRef<'it_support', 'DateTime'>;
    readonly created_at: FieldRef<'it_support', 'DateTime'>;
    readonly updated_at: FieldRef<'it_support', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * it_support findUnique
   */
  export type it_supportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * Filter, which it_support to fetch.
     */
    where: it_supportWhereUniqueInput;
  };

  /**
   * it_support findUniqueOrThrow
   */
  export type it_supportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * Filter, which it_support to fetch.
     */
    where: it_supportWhereUniqueInput;
  };

  /**
   * it_support findFirst
   */
  export type it_supportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * Filter, which it_support to fetch.
     */
    where?: it_supportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of it_supports to fetch.
     */
    orderBy?: it_supportOrderByWithRelationInput | it_supportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for it_supports.
     */
    cursor?: it_supportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` it_supports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` it_supports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of it_supports.
     */
    distinct?: It_supportScalarFieldEnum | It_supportScalarFieldEnum[];
  };

  /**
   * it_support findFirstOrThrow
   */
  export type it_supportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * Filter, which it_support to fetch.
     */
    where?: it_supportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of it_supports to fetch.
     */
    orderBy?: it_supportOrderByWithRelationInput | it_supportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for it_supports.
     */
    cursor?: it_supportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` it_supports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` it_supports.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of it_supports.
     */
    distinct?: It_supportScalarFieldEnum | It_supportScalarFieldEnum[];
  };

  /**
   * it_support findMany
   */
  export type it_supportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * Filter, which it_supports to fetch.
     */
    where?: it_supportWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of it_supports to fetch.
     */
    orderBy?: it_supportOrderByWithRelationInput | it_supportOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing it_supports.
     */
    cursor?: it_supportWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` it_supports from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` it_supports.
     */
    skip?: number;
    distinct?: It_supportScalarFieldEnum | It_supportScalarFieldEnum[];
  };

  /**
   * it_support create
   */
  export type it_supportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * The data needed to create a it_support.
     */
    data: XOR<it_supportCreateInput, it_supportUncheckedCreateInput>;
  };

  /**
   * it_support createMany
   */
  export type it_supportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many it_supports.
     */
    data: it_supportCreateManyInput | it_supportCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * it_support update
   */
  export type it_supportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * The data needed to update a it_support.
     */
    data: XOR<it_supportUpdateInput, it_supportUncheckedUpdateInput>;
    /**
     * Choose, which it_support to update.
     */
    where: it_supportWhereUniqueInput;
  };

  /**
   * it_support updateMany
   */
  export type it_supportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update it_supports.
     */
    data: XOR<it_supportUpdateManyMutationInput, it_supportUncheckedUpdateManyInput>;
    /**
     * Filter which it_supports to update
     */
    where?: it_supportWhereInput;
  };

  /**
   * it_support upsert
   */
  export type it_supportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * The filter to search for the it_support to update in case it exists.
     */
    where: it_supportWhereUniqueInput;
    /**
     * In case the it_support found by the `where` argument doesn't exist, create a new it_support with this data.
     */
    create: XOR<it_supportCreateInput, it_supportUncheckedCreateInput>;
    /**
     * In case the it_support was found with the provided `where` argument, update it with this data.
     */
    update: XOR<it_supportUpdateInput, it_supportUncheckedUpdateInput>;
  };

  /**
   * it_support delete
   */
  export type it_supportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    /**
     * Filter which it_support to delete.
     */
    where: it_supportWhereUniqueInput;
  };

  /**
   * it_support deleteMany
   */
  export type it_supportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which it_supports to delete
     */
    where?: it_supportWhereInput;
  };

  /**
   * it_support without action
   */
  export type it_supportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    country: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        zip_code?: boolean;
        country?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        document?: boolean | organization$documentArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        search?: boolean | organization$searchArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    country?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | organization$documentArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    search?: boolean | organization$searchArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      document: Prisma.$documentPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      search: Prisma.$searchPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        country: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    document<T extends organization$documentArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$documentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    search<T extends organization$searchArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$searchArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly address: FieldRef<'organization', 'String'>;
    readonly city: FieldRef<'organization', 'String'>;
    readonly state: FieldRef<'organization', 'String'>;
    readonly zip_code: FieldRef<'organization', 'String'>;
    readonly country: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
    readonly user_id: FieldRef<'organization', 'String'>;
    readonly tenant_id: FieldRef<'organization', 'String'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.document
   */
  export type organization$documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    where?: documentWhereInput;
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[];
    cursor?: documentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
  };

  /**
   * organization.search
   */
  export type organization$searchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    where?: searchWhereInput;
    orderBy?: searchOrderByWithRelationInput | searchOrderByWithRelationInput[];
    cursor?: searchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model search
   */

  export type AggregateSearch = {
    _count: SearchCountAggregateOutputType | null;
    _min: SearchMinAggregateOutputType | null;
    _max: SearchMaxAggregateOutputType | null;
  };

  export type SearchMinAggregateOutputType = {
    id: string | null;
    query: string | null;
    results: string | null;
    user_id: string | null;
    document_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SearchMaxAggregateOutputType = {
    id: string | null;
    query: string | null;
    results: string | null;
    user_id: string | null;
    document_id: string | null;
    organization_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SearchCountAggregateOutputType = {
    id: number;
    query: number;
    results: number;
    user_id: number;
    document_id: number;
    organization_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SearchMinAggregateInputType = {
    id?: true;
    query?: true;
    results?: true;
    user_id?: true;
    document_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SearchMaxAggregateInputType = {
    id?: true;
    query?: true;
    results?: true;
    user_id?: true;
    document_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SearchCountAggregateInputType = {
    id?: true;
    query?: true;
    results?: true;
    user_id?: true;
    document_id?: true;
    organization_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which search to aggregate.
     */
    where?: searchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of searches to fetch.
     */
    orderBy?: searchOrderByWithRelationInput | searchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: searchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` searches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` searches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned searches
     **/
    _count?: true | SearchCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SearchMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SearchMaxAggregateInputType;
  };

  export type GetSearchAggregateType<T extends SearchAggregateArgs> = {
    [P in keyof T & keyof AggregateSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearch[P]>
      : GetScalarType<T[P], AggregateSearch[P]>;
  };

  export type searchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: searchWhereInput;
    orderBy?: searchOrderByWithAggregationInput | searchOrderByWithAggregationInput[];
    by: SearchScalarFieldEnum[] | SearchScalarFieldEnum;
    having?: searchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SearchCountAggregateInputType | true;
    _min?: SearchMinAggregateInputType;
    _max?: SearchMaxAggregateInputType;
  };

  export type SearchGroupByOutputType = {
    id: string;
    query: string;
    results: string | null;
    user_id: string;
    document_id: string;
    organization_id: string;
    created_at: Date;
    updated_at: Date;
    _count: SearchCountAggregateOutputType | null;
    _min: SearchMinAggregateOutputType | null;
    _max: SearchMaxAggregateOutputType | null;
  };

  type GetSearchGroupByPayload<T extends searchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SearchGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SearchGroupByOutputType[P]>
          : GetScalarType<T[P], SearchGroupByOutputType[P]>;
      }
    >
  >;

  export type searchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      query?: boolean;
      results?: boolean;
      user_id?: boolean;
      document_id?: boolean;
      organization_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      document?: boolean | documentDefaultArgs<ExtArgs>;
      organization?: boolean | organizationDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['search']
  >;

  export type searchSelectScalar = {
    id?: boolean;
    query?: boolean;
    results?: boolean;
    user_id?: boolean;
    document_id?: boolean;
    organization_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type searchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | documentDefaultArgs<ExtArgs>;
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $searchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'search';
    objects: {
      document: Prisma.$documentPayload<ExtArgs>;
      organization: Prisma.$organizationPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        query: string;
        results: string | null;
        user_id: string;
        document_id: string;
        organization_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['search']
    >;
    composites: {};
  };

  type searchGetPayload<S extends boolean | null | undefined | searchDefaultArgs> = $Result.GetResult<
    Prisma.$searchPayload,
    S
  >;

  type searchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    searchFindManyArgs,
    'select' | 'include'
  > & {
    select?: SearchCountAggregateInputType | true;
  };

  export interface searchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['search']; meta: { name: 'search' } };
    /**
     * Find zero or one Search that matches the filter.
     * @param {searchFindUniqueArgs} args - Arguments to find a Search
     * @example
     * // Get one Search
     * const search = await prisma.search.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends searchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, searchFindUniqueArgs<ExtArgs>>,
    ): Prisma__searchClient<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Search that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {searchFindUniqueOrThrowArgs} args - Arguments to find a Search
     * @example
     * // Get one Search
     * const search = await prisma.search.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends searchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, searchFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__searchClient<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Search that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchFindFirstArgs} args - Arguments to find a Search
     * @example
     * // Get one Search
     * const search = await prisma.search.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends searchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, searchFindFirstArgs<ExtArgs>>,
    ): Prisma__searchClient<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Search that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchFindFirstOrThrowArgs} args - Arguments to find a Search
     * @example
     * // Get one Search
     * const search = await prisma.search.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends searchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, searchFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__searchClient<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Searches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Searches
     * const searches = await prisma.search.findMany()
     *
     * // Get first 10 Searches
     * const searches = await prisma.search.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const searchWithIdOnly = await prisma.search.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends searchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, searchFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Search.
     * @param {searchCreateArgs} args - Arguments to create a Search.
     * @example
     * // Create one Search
     * const Search = await prisma.search.create({
     *   data: {
     *     // ... data to create a Search
     *   }
     * })
     *
     **/
    create<T extends searchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, searchCreateArgs<ExtArgs>>,
    ): Prisma__searchClient<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Searches.
     *     @param {searchCreateManyArgs} args - Arguments to create many Searches.
     *     @example
     *     // Create many Searches
     *     const search = await prisma.search.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends searchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, searchCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Search.
     * @param {searchDeleteArgs} args - Arguments to delete one Search.
     * @example
     * // Delete one Search
     * const Search = await prisma.search.delete({
     *   where: {
     *     // ... filter to delete one Search
     *   }
     * })
     *
     **/
    delete<T extends searchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, searchDeleteArgs<ExtArgs>>,
    ): Prisma__searchClient<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Search.
     * @param {searchUpdateArgs} args - Arguments to update one Search.
     * @example
     * // Update one Search
     * const search = await prisma.search.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends searchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, searchUpdateArgs<ExtArgs>>,
    ): Prisma__searchClient<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Searches.
     * @param {searchDeleteManyArgs} args - Arguments to filter Searches to delete.
     * @example
     * // Delete a few Searches
     * const { count } = await prisma.search.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends searchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, searchDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Searches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Searches
     * const search = await prisma.search.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends searchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, searchUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Search.
     * @param {searchUpsertArgs} args - Arguments to update or create a Search.
     * @example
     * // Update or create a Search
     * const search = await prisma.search.upsert({
     *   create: {
     *     // ... data to create a Search
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Search we want to update
     *   }
     * })
     **/
    upsert<T extends searchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, searchUpsertArgs<ExtArgs>>,
    ): Prisma__searchClient<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Searches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchCountArgs} args - Arguments to filter Searches to count.
     * @example
     * // Count the number of Searches
     * const count = await prisma.search.count({
     *   where: {
     *     // ... the filter for the Searches we want to count
     *   }
     * })
     **/
    count<T extends searchCountArgs>(
      args?: Subset<T, searchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Search.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SearchAggregateArgs>(
      args: Subset<T, SearchAggregateArgs>,
    ): Prisma.PrismaPromise<GetSearchAggregateType<T>>;

    /**
     * Group by Search.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {searchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends searchGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: searchGroupByArgs['orderBy'] }
        : { orderBy?: searchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, searchGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the search model
     */
    readonly fields: searchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for search.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__searchClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    document<T extends documentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, documentDefaultArgs<ExtArgs>>,
    ): Prisma__documentClient<
      $Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the search model
   */
  interface searchFieldRefs {
    readonly id: FieldRef<'search', 'String'>;
    readonly query: FieldRef<'search', 'String'>;
    readonly results: FieldRef<'search', 'String'>;
    readonly user_id: FieldRef<'search', 'String'>;
    readonly document_id: FieldRef<'search', 'String'>;
    readonly organization_id: FieldRef<'search', 'String'>;
    readonly created_at: FieldRef<'search', 'DateTime'>;
    readonly updated_at: FieldRef<'search', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * search findUnique
   */
  export type searchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * Filter, which search to fetch.
     */
    where: searchWhereUniqueInput;
  };

  /**
   * search findUniqueOrThrow
   */
  export type searchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * Filter, which search to fetch.
     */
    where: searchWhereUniqueInput;
  };

  /**
   * search findFirst
   */
  export type searchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * Filter, which search to fetch.
     */
    where?: searchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of searches to fetch.
     */
    orderBy?: searchOrderByWithRelationInput | searchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for searches.
     */
    cursor?: searchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` searches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` searches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of searches.
     */
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[];
  };

  /**
   * search findFirstOrThrow
   */
  export type searchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * Filter, which search to fetch.
     */
    where?: searchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of searches to fetch.
     */
    orderBy?: searchOrderByWithRelationInput | searchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for searches.
     */
    cursor?: searchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` searches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` searches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of searches.
     */
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[];
  };

  /**
   * search findMany
   */
  export type searchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * Filter, which searches to fetch.
     */
    where?: searchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of searches to fetch.
     */
    orderBy?: searchOrderByWithRelationInput | searchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing searches.
     */
    cursor?: searchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` searches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` searches.
     */
    skip?: number;
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[];
  };

  /**
   * search create
   */
  export type searchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * The data needed to create a search.
     */
    data: XOR<searchCreateInput, searchUncheckedCreateInput>;
  };

  /**
   * search createMany
   */
  export type searchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many searches.
     */
    data: searchCreateManyInput | searchCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * search update
   */
  export type searchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * The data needed to update a search.
     */
    data: XOR<searchUpdateInput, searchUncheckedUpdateInput>;
    /**
     * Choose, which search to update.
     */
    where: searchWhereUniqueInput;
  };

  /**
   * search updateMany
   */
  export type searchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update searches.
     */
    data: XOR<searchUpdateManyMutationInput, searchUncheckedUpdateManyInput>;
    /**
     * Filter which searches to update
     */
    where?: searchWhereInput;
  };

  /**
   * search upsert
   */
  export type searchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * The filter to search for the search to update in case it exists.
     */
    where: searchWhereUniqueInput;
    /**
     * In case the search found by the `where` argument doesn't exist, create a new search with this data.
     */
    create: XOR<searchCreateInput, searchUncheckedCreateInput>;
    /**
     * In case the search was found with the provided `where` argument, update it with this data.
     */
    update: XOR<searchUpdateInput, searchUncheckedUpdateInput>;
  };

  /**
   * search delete
   */
  export type searchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    /**
     * Filter which search to delete.
     */
    where: searchWhereUniqueInput;
  };

  /**
   * search deleteMany
   */
  export type searchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which searches to delete
     */
    where?: searchWhereInput;
  };

  /**
   * search without action
   */
  export type searchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      document?: boolean | user$documentArgs<ExtArgs>;
      email_logs?: boolean | user$email_logsArgs<ExtArgs>;
      it_support?: boolean | user$it_supportArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      search?: boolean | user$searchArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | user$documentArgs<ExtArgs>;
    email_logs?: boolean | user$email_logsArgs<ExtArgs>;
    it_support?: boolean | user$it_supportArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    search?: boolean | user$searchArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      document: Prisma.$documentPayload<ExtArgs>[];
      email_logs: Prisma.$email_logsPayload<ExtArgs>[];
      it_support: Prisma.$it_supportPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs>[];
      search: Prisma.$searchPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    document<T extends user$documentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$documentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, 'findMany'> | Null>;

    email_logs<T extends user$email_logsArgs<ExtArgs> = {}>(
      args?: Subset<T, user$email_logsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$email_logsPayload<ExtArgs>, T, 'findMany'> | Null>;

    it_support<T extends user$it_supportArgs<ExtArgs> = {}>(
      args?: Subset<T, user$it_supportArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$it_supportPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'> | Null>;

    search<T extends user$searchArgs<ExtArgs> = {}>(
      args?: Subset<T, user$searchArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$searchPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.document
   */
  export type user$documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentInclude<ExtArgs> | null;
    where?: documentWhereInput;
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[];
    cursor?: documentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[];
  };

  /**
   * user.email_logs
   */
  export type user$email_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the email_logs
     */
    select?: email_logsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: email_logsInclude<ExtArgs> | null;
    where?: email_logsWhereInput;
    orderBy?: email_logsOrderByWithRelationInput | email_logsOrderByWithRelationInput[];
    cursor?: email_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Email_logsScalarFieldEnum | Email_logsScalarFieldEnum[];
  };

  /**
   * user.it_support
   */
  export type user$it_supportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the it_support
     */
    select?: it_supportSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: it_supportInclude<ExtArgs> | null;
    where?: it_supportWhereInput;
    orderBy?: it_supportOrderByWithRelationInput | it_supportOrderByWithRelationInput[];
    cursor?: it_supportWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: It_supportScalarFieldEnum | It_supportScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    cursor?: organizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * user.search
   */
  export type user$searchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the search
     */
    select?: searchSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: searchInclude<ExtArgs> | null;
    where?: searchWhereInput;
    orderBy?: searchOrderByWithRelationInput | searchOrderByWithRelationInput[];
    cursor?: searchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SearchScalarFieldEnum | SearchScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const DocumentScalarFieldEnum: {
    id: 'id';
    title: 'title';
    content: 'content';
    document_type: 'document_type';
    status: 'status';
    user_id: 'user_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum];

  export const Email_logsScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    email_subject: 'email_subject';
    email_body: 'email_body';
    sent_at: 'sent_at';
    status: 'status';
    recipient_email: 'recipient_email';
    sender_email: 'sender_email';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Email_logsScalarFieldEnum = (typeof Email_logsScalarFieldEnum)[keyof typeof Email_logsScalarFieldEnum];

  export const It_supportScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    issue_description: 'issue_description';
    status: 'status';
    priority: 'priority';
    resolved_at: 'resolved_at';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type It_supportScalarFieldEnum = (typeof It_supportScalarFieldEnum)[keyof typeof It_supportScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    country: 'country';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const SearchScalarFieldEnum: {
    id: 'id';
    query: 'query';
    results: 'results';
    user_id: 'user_id';
    document_id: 'document_id';
    organization_id: 'organization_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SearchScalarFieldEnum = (typeof SearchScalarFieldEnum)[keyof typeof SearchScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type documentWhereInput = {
    AND?: documentWhereInput | documentWhereInput[];
    OR?: documentWhereInput[];
    NOT?: documentWhereInput | documentWhereInput[];
    id?: UuidFilter<'document'> | string;
    title?: StringFilter<'document'> | string;
    content?: StringFilter<'document'> | string;
    document_type?: StringNullableFilter<'document'> | string | null;
    status?: StringNullableFilter<'document'> | string | null;
    user_id?: UuidFilter<'document'> | string;
    organization_id?: UuidFilter<'document'> | string;
    created_at?: DateTimeFilter<'document'> | Date | string;
    updated_at?: DateTimeFilter<'document'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    search?: SearchListRelationFilter;
  };

  export type documentOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    document_type?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    search?: searchOrderByRelationAggregateInput;
  };

  export type documentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: documentWhereInput | documentWhereInput[];
      OR?: documentWhereInput[];
      NOT?: documentWhereInput | documentWhereInput[];
      title?: StringFilter<'document'> | string;
      content?: StringFilter<'document'> | string;
      document_type?: StringNullableFilter<'document'> | string | null;
      status?: StringNullableFilter<'document'> | string | null;
      user_id?: UuidFilter<'document'> | string;
      organization_id?: UuidFilter<'document'> | string;
      created_at?: DateTimeFilter<'document'> | Date | string;
      updated_at?: DateTimeFilter<'document'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      search?: SearchListRelationFilter;
    },
    'id'
  >;

  export type documentOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    document_type?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: documentCountOrderByAggregateInput;
    _max?: documentMaxOrderByAggregateInput;
    _min?: documentMinOrderByAggregateInput;
  };

  export type documentScalarWhereWithAggregatesInput = {
    AND?: documentScalarWhereWithAggregatesInput | documentScalarWhereWithAggregatesInput[];
    OR?: documentScalarWhereWithAggregatesInput[];
    NOT?: documentScalarWhereWithAggregatesInput | documentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'document'> | string;
    title?: StringWithAggregatesFilter<'document'> | string;
    content?: StringWithAggregatesFilter<'document'> | string;
    document_type?: StringNullableWithAggregatesFilter<'document'> | string | null;
    status?: StringNullableWithAggregatesFilter<'document'> | string | null;
    user_id?: UuidWithAggregatesFilter<'document'> | string;
    organization_id?: UuidWithAggregatesFilter<'document'> | string;
    created_at?: DateTimeWithAggregatesFilter<'document'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'document'> | Date | string;
  };

  export type email_logsWhereInput = {
    AND?: email_logsWhereInput | email_logsWhereInput[];
    OR?: email_logsWhereInput[];
    NOT?: email_logsWhereInput | email_logsWhereInput[];
    id?: UuidFilter<'email_logs'> | string;
    user_id?: UuidFilter<'email_logs'> | string;
    email_subject?: StringFilter<'email_logs'> | string;
    email_body?: StringFilter<'email_logs'> | string;
    sent_at?: DateTimeFilter<'email_logs'> | Date | string;
    status?: StringFilter<'email_logs'> | string;
    recipient_email?: StringFilter<'email_logs'> | string;
    sender_email?: StringFilter<'email_logs'> | string;
    created_at?: DateTimeFilter<'email_logs'> | Date | string;
    updated_at?: DateTimeFilter<'email_logs'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type email_logsOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    email_subject?: SortOrder;
    email_body?: SortOrder;
    sent_at?: SortOrder;
    status?: SortOrder;
    recipient_email?: SortOrder;
    sender_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type email_logsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: email_logsWhereInput | email_logsWhereInput[];
      OR?: email_logsWhereInput[];
      NOT?: email_logsWhereInput | email_logsWhereInput[];
      user_id?: UuidFilter<'email_logs'> | string;
      email_subject?: StringFilter<'email_logs'> | string;
      email_body?: StringFilter<'email_logs'> | string;
      sent_at?: DateTimeFilter<'email_logs'> | Date | string;
      status?: StringFilter<'email_logs'> | string;
      recipient_email?: StringFilter<'email_logs'> | string;
      sender_email?: StringFilter<'email_logs'> | string;
      created_at?: DateTimeFilter<'email_logs'> | Date | string;
      updated_at?: DateTimeFilter<'email_logs'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type email_logsOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    email_subject?: SortOrder;
    email_body?: SortOrder;
    sent_at?: SortOrder;
    status?: SortOrder;
    recipient_email?: SortOrder;
    sender_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: email_logsCountOrderByAggregateInput;
    _max?: email_logsMaxOrderByAggregateInput;
    _min?: email_logsMinOrderByAggregateInput;
  };

  export type email_logsScalarWhereWithAggregatesInput = {
    AND?: email_logsScalarWhereWithAggregatesInput | email_logsScalarWhereWithAggregatesInput[];
    OR?: email_logsScalarWhereWithAggregatesInput[];
    NOT?: email_logsScalarWhereWithAggregatesInput | email_logsScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'email_logs'> | string;
    user_id?: UuidWithAggregatesFilter<'email_logs'> | string;
    email_subject?: StringWithAggregatesFilter<'email_logs'> | string;
    email_body?: StringWithAggregatesFilter<'email_logs'> | string;
    sent_at?: DateTimeWithAggregatesFilter<'email_logs'> | Date | string;
    status?: StringWithAggregatesFilter<'email_logs'> | string;
    recipient_email?: StringWithAggregatesFilter<'email_logs'> | string;
    sender_email?: StringWithAggregatesFilter<'email_logs'> | string;
    created_at?: DateTimeWithAggregatesFilter<'email_logs'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'email_logs'> | Date | string;
  };

  export type it_supportWhereInput = {
    AND?: it_supportWhereInput | it_supportWhereInput[];
    OR?: it_supportWhereInput[];
    NOT?: it_supportWhereInput | it_supportWhereInput[];
    id?: UuidFilter<'it_support'> | string;
    user_id?: UuidFilter<'it_support'> | string;
    issue_description?: StringFilter<'it_support'> | string;
    status?: StringFilter<'it_support'> | string;
    priority?: StringNullableFilter<'it_support'> | string | null;
    resolved_at?: DateTimeNullableFilter<'it_support'> | Date | string | null;
    created_at?: DateTimeFilter<'it_support'> | Date | string;
    updated_at?: DateTimeFilter<'it_support'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type it_supportOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrderInput | SortOrder;
    resolved_at?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type it_supportWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: it_supportWhereInput | it_supportWhereInput[];
      OR?: it_supportWhereInput[];
      NOT?: it_supportWhereInput | it_supportWhereInput[];
      user_id?: UuidFilter<'it_support'> | string;
      issue_description?: StringFilter<'it_support'> | string;
      status?: StringFilter<'it_support'> | string;
      priority?: StringNullableFilter<'it_support'> | string | null;
      resolved_at?: DateTimeNullableFilter<'it_support'> | Date | string | null;
      created_at?: DateTimeFilter<'it_support'> | Date | string;
      updated_at?: DateTimeFilter<'it_support'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type it_supportOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrderInput | SortOrder;
    resolved_at?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: it_supportCountOrderByAggregateInput;
    _max?: it_supportMaxOrderByAggregateInput;
    _min?: it_supportMinOrderByAggregateInput;
  };

  export type it_supportScalarWhereWithAggregatesInput = {
    AND?: it_supportScalarWhereWithAggregatesInput | it_supportScalarWhereWithAggregatesInput[];
    OR?: it_supportScalarWhereWithAggregatesInput[];
    NOT?: it_supportScalarWhereWithAggregatesInput | it_supportScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'it_support'> | string;
    user_id?: UuidWithAggregatesFilter<'it_support'> | string;
    issue_description?: StringWithAggregatesFilter<'it_support'> | string;
    status?: StringWithAggregatesFilter<'it_support'> | string;
    priority?: StringNullableWithAggregatesFilter<'it_support'> | string | null;
    resolved_at?: DateTimeNullableWithAggregatesFilter<'it_support'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'it_support'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'it_support'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    city?: StringNullableFilter<'organization'> | string | null;
    state?: StringNullableFilter<'organization'> | string | null;
    zip_code?: StringNullableFilter<'organization'> | string | null;
    country?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
    document?: DocumentListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    search?: SearchListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    document?: documentOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    search?: searchOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      address?: StringNullableFilter<'organization'> | string | null;
      city?: StringNullableFilter<'organization'> | string | null;
      state?: StringNullableFilter<'organization'> | string | null;
      zip_code?: StringNullableFilter<'organization'> | string | null;
      country?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user_id?: UuidFilter<'organization'> | string;
      tenant_id?: StringFilter<'organization'> | string;
      document?: DocumentListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      search?: SearchListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    country?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    address?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    city?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    state?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    country?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'organization'> | string;
    tenant_id?: StringWithAggregatesFilter<'organization'> | string;
  };

  export type searchWhereInput = {
    AND?: searchWhereInput | searchWhereInput[];
    OR?: searchWhereInput[];
    NOT?: searchWhereInput | searchWhereInput[];
    id?: UuidFilter<'search'> | string;
    query?: StringFilter<'search'> | string;
    results?: StringNullableFilter<'search'> | string | null;
    user_id?: UuidFilter<'search'> | string;
    document_id?: UuidFilter<'search'> | string;
    organization_id?: UuidFilter<'search'> | string;
    created_at?: DateTimeFilter<'search'> | Date | string;
    updated_at?: DateTimeFilter<'search'> | Date | string;
    document?: XOR<DocumentRelationFilter, documentWhereInput>;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type searchOrderByWithRelationInput = {
    id?: SortOrder;
    query?: SortOrder;
    results?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    document_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    document?: documentOrderByWithRelationInput;
    organization?: organizationOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type searchWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: searchWhereInput | searchWhereInput[];
      OR?: searchWhereInput[];
      NOT?: searchWhereInput | searchWhereInput[];
      query?: StringFilter<'search'> | string;
      results?: StringNullableFilter<'search'> | string | null;
      user_id?: UuidFilter<'search'> | string;
      document_id?: UuidFilter<'search'> | string;
      organization_id?: UuidFilter<'search'> | string;
      created_at?: DateTimeFilter<'search'> | Date | string;
      updated_at?: DateTimeFilter<'search'> | Date | string;
      document?: XOR<DocumentRelationFilter, documentWhereInput>;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type searchOrderByWithAggregationInput = {
    id?: SortOrder;
    query?: SortOrder;
    results?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    document_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: searchCountOrderByAggregateInput;
    _max?: searchMaxOrderByAggregateInput;
    _min?: searchMinOrderByAggregateInput;
  };

  export type searchScalarWhereWithAggregatesInput = {
    AND?: searchScalarWhereWithAggregatesInput | searchScalarWhereWithAggregatesInput[];
    OR?: searchScalarWhereWithAggregatesInput[];
    NOT?: searchScalarWhereWithAggregatesInput | searchScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'search'> | string;
    query?: StringWithAggregatesFilter<'search'> | string;
    results?: StringNullableWithAggregatesFilter<'search'> | string | null;
    user_id?: UuidWithAggregatesFilter<'search'> | string;
    document_id?: UuidWithAggregatesFilter<'search'> | string;
    organization_id?: UuidWithAggregatesFilter<'search'> | string;
    created_at?: DateTimeWithAggregatesFilter<'search'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'search'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    document?: DocumentListRelationFilter;
    email_logs?: Email_logsListRelationFilter;
    it_support?: It_supportListRelationFilter;
    organization?: OrganizationListRelationFilter;
    search?: SearchListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    document?: documentOrderByRelationAggregateInput;
    email_logs?: email_logsOrderByRelationAggregateInput;
    it_support?: it_supportOrderByRelationAggregateInput;
    organization?: organizationOrderByRelationAggregateInput;
    search?: searchOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      document?: DocumentListRelationFilter;
      email_logs?: Email_logsListRelationFilter;
      it_support?: It_supportListRelationFilter;
      organization?: OrganizationListRelationFilter;
      search?: SearchListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type documentCreateInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutDocumentInput;
    user: userCreateNestedOneWithoutDocumentInput;
    search?: searchCreateNestedManyWithoutDocumentInput;
  };

  export type documentUncheckedCreateInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    search?: searchUncheckedCreateNestedManyWithoutDocumentInput;
  };

  export type documentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutDocumentNestedInput;
    user?: userUpdateOneRequiredWithoutDocumentNestedInput;
    search?: searchUpdateManyWithoutDocumentNestedInput;
  };

  export type documentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    search?: searchUncheckedUpdateManyWithoutDocumentNestedInput;
  };

  export type documentCreateManyInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type email_logsCreateInput = {
    id?: string;
    email_subject: string;
    email_body: string;
    sent_at?: Date | string;
    status: string;
    recipient_email: string;
    sender_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmail_logsInput;
  };

  export type email_logsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    email_subject: string;
    email_body: string;
    sent_at?: Date | string;
    status: string;
    recipient_email: string;
    sender_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type email_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email_subject?: StringFieldUpdateOperationsInput | string;
    email_body?: StringFieldUpdateOperationsInput | string;
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    recipient_email?: StringFieldUpdateOperationsInput | string;
    sender_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmail_logsNestedInput;
  };

  export type email_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    email_subject?: StringFieldUpdateOperationsInput | string;
    email_body?: StringFieldUpdateOperationsInput | string;
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    recipient_email?: StringFieldUpdateOperationsInput | string;
    sender_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type email_logsCreateManyInput = {
    id?: string;
    user_id: string;
    email_subject: string;
    email_body: string;
    sent_at?: Date | string;
    status: string;
    recipient_email: string;
    sender_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type email_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email_subject?: StringFieldUpdateOperationsInput | string;
    email_body?: StringFieldUpdateOperationsInput | string;
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    recipient_email?: StringFieldUpdateOperationsInput | string;
    sender_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type email_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    email_subject?: StringFieldUpdateOperationsInput | string;
    email_body?: StringFieldUpdateOperationsInput | string;
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    recipient_email?: StringFieldUpdateOperationsInput | string;
    sender_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type it_supportCreateInput = {
    id?: string;
    issue_description: string;
    status: string;
    priority?: string | null;
    resolved_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutIt_supportInput;
  };

  export type it_supportUncheckedCreateInput = {
    id?: string;
    user_id: string;
    issue_description: string;
    status: string;
    priority?: string | null;
    resolved_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type it_supportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    priority?: NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutIt_supportNestedInput;
  };

  export type it_supportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    priority?: NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type it_supportCreateManyInput = {
    id?: string;
    user_id: string;
    issue_description: string;
    status: string;
    priority?: string | null;
    resolved_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type it_supportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    priority?: NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type it_supportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    priority?: NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    document?: documentCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
    search?: searchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    document?: documentUncheckedCreateNestedManyWithoutOrganizationInput;
    search?: searchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    document?: documentUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    search?: searchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    document?: documentUncheckedUpdateManyWithoutOrganizationNestedInput;
    search?: searchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type searchCreateInput = {
    id?: string;
    query: string;
    results?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    document: documentCreateNestedOneWithoutSearchInput;
    organization: organizationCreateNestedOneWithoutSearchInput;
    user: userCreateNestedOneWithoutSearchInput;
  };

  export type searchUncheckedCreateInput = {
    id?: string;
    query: string;
    results?: string | null;
    user_id: string;
    document_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type searchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUpdateOneRequiredWithoutSearchNestedInput;
    organization?: organizationUpdateOneRequiredWithoutSearchNestedInput;
    user?: userUpdateOneRequiredWithoutSearchNestedInput;
  };

  export type searchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    document_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type searchCreateManyInput = {
    id?: string;
    query: string;
    results?: string | null;
    user_id: string;
    document_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type searchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type searchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    document_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentCreateNestedManyWithoutUserInput;
    email_logs?: email_logsCreateNestedManyWithoutUserInput;
    it_support?: it_supportCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    search?: searchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentUncheckedCreateNestedManyWithoutUserInput;
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUserInput;
    it_support?: it_supportUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    search?: searchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUpdateManyWithoutUserNestedInput;
    email_logs?: email_logsUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    search?: searchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUncheckedUpdateManyWithoutUserNestedInput;
    email_logs?: email_logsUncheckedUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    search?: searchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SearchListRelationFilter = {
    every?: searchWhereInput;
    some?: searchWhereInput;
    none?: searchWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type searchOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type documentCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    document_type?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type documentMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    document_type?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type documentMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    document_type?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type email_logsCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    email_subject?: SortOrder;
    email_body?: SortOrder;
    sent_at?: SortOrder;
    status?: SortOrder;
    recipient_email?: SortOrder;
    sender_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type email_logsMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    email_subject?: SortOrder;
    email_body?: SortOrder;
    sent_at?: SortOrder;
    status?: SortOrder;
    recipient_email?: SortOrder;
    sender_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type email_logsMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    email_subject?: SortOrder;
    email_body?: SortOrder;
    sent_at?: SortOrder;
    status?: SortOrder;
    recipient_email?: SortOrder;
    sender_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type it_supportCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    resolved_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type it_supportMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    resolved_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type it_supportMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    issue_description?: SortOrder;
    status?: SortOrder;
    priority?: SortOrder;
    resolved_at?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DocumentListRelationFilter = {
    every?: documentWhereInput;
    some?: documentWhereInput;
    none?: documentWhereInput;
  };

  export type documentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type DocumentRelationFilter = {
    is?: documentWhereInput;
    isNot?: documentWhereInput;
  };

  export type searchCountOrderByAggregateInput = {
    id?: SortOrder;
    query?: SortOrder;
    results?: SortOrder;
    user_id?: SortOrder;
    document_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type searchMaxOrderByAggregateInput = {
    id?: SortOrder;
    query?: SortOrder;
    results?: SortOrder;
    user_id?: SortOrder;
    document_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type searchMinOrderByAggregateInput = {
    id?: SortOrder;
    query?: SortOrder;
    results?: SortOrder;
    user_id?: SortOrder;
    document_id?: SortOrder;
    organization_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Email_logsListRelationFilter = {
    every?: email_logsWhereInput;
    some?: email_logsWhereInput;
    none?: email_logsWhereInput;
  };

  export type It_supportListRelationFilter = {
    every?: it_supportWhereInput;
    some?: it_supportWhereInput;
    none?: it_supportWhereInput;
  };

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput;
    some?: organizationWhereInput;
    none?: organizationWhereInput;
  };

  export type email_logsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type it_supportOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationCreateNestedOneWithoutDocumentInput = {
    create?: XOR<organizationCreateWithoutDocumentInput, organizationUncheckedCreateWithoutDocumentInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutDocumentInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutDocumentInput = {
    create?: XOR<userCreateWithoutDocumentInput, userUncheckedCreateWithoutDocumentInput>;
    connectOrCreate?: userCreateOrConnectWithoutDocumentInput;
    connect?: userWhereUniqueInput;
  };

  export type searchCreateNestedManyWithoutDocumentInput = {
    create?:
      | XOR<searchCreateWithoutDocumentInput, searchUncheckedCreateWithoutDocumentInput>
      | searchCreateWithoutDocumentInput[]
      | searchUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: searchCreateOrConnectWithoutDocumentInput | searchCreateOrConnectWithoutDocumentInput[];
    createMany?: searchCreateManyDocumentInputEnvelope;
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
  };

  export type searchUncheckedCreateNestedManyWithoutDocumentInput = {
    create?:
      | XOR<searchCreateWithoutDocumentInput, searchUncheckedCreateWithoutDocumentInput>
      | searchCreateWithoutDocumentInput[]
      | searchUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: searchCreateOrConnectWithoutDocumentInput | searchCreateOrConnectWithoutDocumentInput[];
    createMany?: searchCreateManyDocumentInputEnvelope;
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type organizationUpdateOneRequiredWithoutDocumentNestedInput = {
    create?: XOR<organizationCreateWithoutDocumentInput, organizationUncheckedCreateWithoutDocumentInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutDocumentInput;
    upsert?: organizationUpsertWithoutDocumentInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutDocumentInput, organizationUpdateWithoutDocumentInput>,
      organizationUncheckedUpdateWithoutDocumentInput
    >;
  };

  export type userUpdateOneRequiredWithoutDocumentNestedInput = {
    create?: XOR<userCreateWithoutDocumentInput, userUncheckedCreateWithoutDocumentInput>;
    connectOrCreate?: userCreateOrConnectWithoutDocumentInput;
    upsert?: userUpsertWithoutDocumentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutDocumentInput, userUpdateWithoutDocumentInput>,
      userUncheckedUpdateWithoutDocumentInput
    >;
  };

  export type searchUpdateManyWithoutDocumentNestedInput = {
    create?:
      | XOR<searchCreateWithoutDocumentInput, searchUncheckedCreateWithoutDocumentInput>
      | searchCreateWithoutDocumentInput[]
      | searchUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: searchCreateOrConnectWithoutDocumentInput | searchCreateOrConnectWithoutDocumentInput[];
    upsert?: searchUpsertWithWhereUniqueWithoutDocumentInput | searchUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: searchCreateManyDocumentInputEnvelope;
    set?: searchWhereUniqueInput | searchWhereUniqueInput[];
    disconnect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    delete?: searchWhereUniqueInput | searchWhereUniqueInput[];
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    update?: searchUpdateWithWhereUniqueWithoutDocumentInput | searchUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: searchUpdateManyWithWhereWithoutDocumentInput | searchUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: searchScalarWhereInput | searchScalarWhereInput[];
  };

  export type searchUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?:
      | XOR<searchCreateWithoutDocumentInput, searchUncheckedCreateWithoutDocumentInput>
      | searchCreateWithoutDocumentInput[]
      | searchUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: searchCreateOrConnectWithoutDocumentInput | searchCreateOrConnectWithoutDocumentInput[];
    upsert?: searchUpsertWithWhereUniqueWithoutDocumentInput | searchUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: searchCreateManyDocumentInputEnvelope;
    set?: searchWhereUniqueInput | searchWhereUniqueInput[];
    disconnect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    delete?: searchWhereUniqueInput | searchWhereUniqueInput[];
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    update?: searchUpdateWithWhereUniqueWithoutDocumentInput | searchUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: searchUpdateManyWithWhereWithoutDocumentInput | searchUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: searchScalarWhereInput | searchScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutEmail_logsInput = {
    create?: XOR<userCreateWithoutEmail_logsInput, userUncheckedCreateWithoutEmail_logsInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmail_logsInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutEmail_logsNestedInput = {
    create?: XOR<userCreateWithoutEmail_logsInput, userUncheckedCreateWithoutEmail_logsInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmail_logsInput;
    upsert?: userUpsertWithoutEmail_logsInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmail_logsInput, userUpdateWithoutEmail_logsInput>,
      userUncheckedUpdateWithoutEmail_logsInput
    >;
  };

  export type userCreateNestedOneWithoutIt_supportInput = {
    create?: XOR<userCreateWithoutIt_supportInput, userUncheckedCreateWithoutIt_supportInput>;
    connectOrCreate?: userCreateOrConnectWithoutIt_supportInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateOneRequiredWithoutIt_supportNestedInput = {
    create?: XOR<userCreateWithoutIt_supportInput, userUncheckedCreateWithoutIt_supportInput>;
    connectOrCreate?: userCreateOrConnectWithoutIt_supportInput;
    upsert?: userUpsertWithoutIt_supportInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutIt_supportInput, userUpdateWithoutIt_supportInput>,
      userUncheckedUpdateWithoutIt_supportInput
    >;
  };

  export type documentCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<documentCreateWithoutOrganizationInput, documentUncheckedCreateWithoutOrganizationInput>
      | documentCreateWithoutOrganizationInput[]
      | documentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | documentCreateOrConnectWithoutOrganizationInput
      | documentCreateOrConnectWithoutOrganizationInput[];
    createMany?: documentCreateManyOrganizationInputEnvelope;
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
  };

  export type searchCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<searchCreateWithoutOrganizationInput, searchUncheckedCreateWithoutOrganizationInput>
      | searchCreateWithoutOrganizationInput[]
      | searchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: searchCreateOrConnectWithoutOrganizationInput | searchCreateOrConnectWithoutOrganizationInput[];
    createMany?: searchCreateManyOrganizationInputEnvelope;
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
  };

  export type documentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<documentCreateWithoutOrganizationInput, documentUncheckedCreateWithoutOrganizationInput>
      | documentCreateWithoutOrganizationInput[]
      | documentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | documentCreateOrConnectWithoutOrganizationInput
      | documentCreateOrConnectWithoutOrganizationInput[];
    createMany?: documentCreateManyOrganizationInputEnvelope;
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[];
  };

  export type searchUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<searchCreateWithoutOrganizationInput, searchUncheckedCreateWithoutOrganizationInput>
      | searchCreateWithoutOrganizationInput[]
      | searchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: searchCreateOrConnectWithoutOrganizationInput | searchCreateOrConnectWithoutOrganizationInput[];
    createMany?: searchCreateManyOrganizationInputEnvelope;
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
  };

  export type documentUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<documentCreateWithoutOrganizationInput, documentUncheckedCreateWithoutOrganizationInput>
      | documentCreateWithoutOrganizationInput[]
      | documentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | documentCreateOrConnectWithoutOrganizationInput
      | documentCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | documentUpsertWithWhereUniqueWithoutOrganizationInput
      | documentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: documentCreateManyOrganizationInputEnvelope;
    set?: documentWhereUniqueInput | documentWhereUniqueInput[];
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[];
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[];
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[];
    update?:
      | documentUpdateWithWhereUniqueWithoutOrganizationInput
      | documentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | documentUpdateManyWithWhereWithoutOrganizationInput
      | documentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput;
    upsert?: userUpsertWithoutOrganizationInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOrganizationInput, userUpdateWithoutOrganizationInput>,
      userUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type searchUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<searchCreateWithoutOrganizationInput, searchUncheckedCreateWithoutOrganizationInput>
      | searchCreateWithoutOrganizationInput[]
      | searchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: searchCreateOrConnectWithoutOrganizationInput | searchCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | searchUpsertWithWhereUniqueWithoutOrganizationInput
      | searchUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: searchCreateManyOrganizationInputEnvelope;
    set?: searchWhereUniqueInput | searchWhereUniqueInput[];
    disconnect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    delete?: searchWhereUniqueInput | searchWhereUniqueInput[];
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    update?:
      | searchUpdateWithWhereUniqueWithoutOrganizationInput
      | searchUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | searchUpdateManyWithWhereWithoutOrganizationInput
      | searchUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: searchScalarWhereInput | searchScalarWhereInput[];
  };

  export type documentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<documentCreateWithoutOrganizationInput, documentUncheckedCreateWithoutOrganizationInput>
      | documentCreateWithoutOrganizationInput[]
      | documentUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | documentCreateOrConnectWithoutOrganizationInput
      | documentCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | documentUpsertWithWhereUniqueWithoutOrganizationInput
      | documentUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: documentCreateManyOrganizationInputEnvelope;
    set?: documentWhereUniqueInput | documentWhereUniqueInput[];
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[];
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[];
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[];
    update?:
      | documentUpdateWithWhereUniqueWithoutOrganizationInput
      | documentUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | documentUpdateManyWithWhereWithoutOrganizationInput
      | documentUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[];
  };

  export type searchUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<searchCreateWithoutOrganizationInput, searchUncheckedCreateWithoutOrganizationInput>
      | searchCreateWithoutOrganizationInput[]
      | searchUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: searchCreateOrConnectWithoutOrganizationInput | searchCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | searchUpsertWithWhereUniqueWithoutOrganizationInput
      | searchUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: searchCreateManyOrganizationInputEnvelope;
    set?: searchWhereUniqueInput | searchWhereUniqueInput[];
    disconnect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    delete?: searchWhereUniqueInput | searchWhereUniqueInput[];
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    update?:
      | searchUpdateWithWhereUniqueWithoutOrganizationInput
      | searchUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | searchUpdateManyWithWhereWithoutOrganizationInput
      | searchUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: searchScalarWhereInput | searchScalarWhereInput[];
  };

  export type documentCreateNestedOneWithoutSearchInput = {
    create?: XOR<documentCreateWithoutSearchInput, documentUncheckedCreateWithoutSearchInput>;
    connectOrCreate?: documentCreateOrConnectWithoutSearchInput;
    connect?: documentWhereUniqueInput;
  };

  export type organizationCreateNestedOneWithoutSearchInput = {
    create?: XOR<organizationCreateWithoutSearchInput, organizationUncheckedCreateWithoutSearchInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutSearchInput;
    connect?: organizationWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutSearchInput = {
    create?: XOR<userCreateWithoutSearchInput, userUncheckedCreateWithoutSearchInput>;
    connectOrCreate?: userCreateOrConnectWithoutSearchInput;
    connect?: userWhereUniqueInput;
  };

  export type documentUpdateOneRequiredWithoutSearchNestedInput = {
    create?: XOR<documentCreateWithoutSearchInput, documentUncheckedCreateWithoutSearchInput>;
    connectOrCreate?: documentCreateOrConnectWithoutSearchInput;
    upsert?: documentUpsertWithoutSearchInput;
    connect?: documentWhereUniqueInput;
    update?: XOR<
      XOR<documentUpdateToOneWithWhereWithoutSearchInput, documentUpdateWithoutSearchInput>,
      documentUncheckedUpdateWithoutSearchInput
    >;
  };

  export type organizationUpdateOneRequiredWithoutSearchNestedInput = {
    create?: XOR<organizationCreateWithoutSearchInput, organizationUncheckedCreateWithoutSearchInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutSearchInput;
    upsert?: organizationUpsertWithoutSearchInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutSearchInput, organizationUpdateWithoutSearchInput>,
      organizationUncheckedUpdateWithoutSearchInput
    >;
  };

  export type userUpdateOneRequiredWithoutSearchNestedInput = {
    create?: XOR<userCreateWithoutSearchInput, userUncheckedCreateWithoutSearchInput>;
    connectOrCreate?: userCreateOrConnectWithoutSearchInput;
    upsert?: userUpsertWithoutSearchInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSearchInput, userUpdateWithoutSearchInput>,
      userUncheckedUpdateWithoutSearchInput
    >;
  };

  export type documentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput>
      | documentCreateWithoutUserInput[]
      | documentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: documentCreateOrConnectWithoutUserInput | documentCreateOrConnectWithoutUserInput[];
    createMany?: documentCreateManyUserInputEnvelope;
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[];
  };

  export type email_logsCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<email_logsCreateWithoutUserInput, email_logsUncheckedCreateWithoutUserInput>
      | email_logsCreateWithoutUserInput[]
      | email_logsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: email_logsCreateOrConnectWithoutUserInput | email_logsCreateOrConnectWithoutUserInput[];
    createMany?: email_logsCreateManyUserInputEnvelope;
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
  };

  export type it_supportCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<it_supportCreateWithoutUserInput, it_supportUncheckedCreateWithoutUserInput>
      | it_supportCreateWithoutUserInput[]
      | it_supportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: it_supportCreateOrConnectWithoutUserInput | it_supportCreateOrConnectWithoutUserInput[];
    createMany?: it_supportCreateManyUserInputEnvelope;
    connect?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
  };

  export type organizationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type searchCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<searchCreateWithoutUserInput, searchUncheckedCreateWithoutUserInput>
      | searchCreateWithoutUserInput[]
      | searchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: searchCreateOrConnectWithoutUserInput | searchCreateOrConnectWithoutUserInput[];
    createMany?: searchCreateManyUserInputEnvelope;
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
  };

  export type documentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput>
      | documentCreateWithoutUserInput[]
      | documentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: documentCreateOrConnectWithoutUserInput | documentCreateOrConnectWithoutUserInput[];
    createMany?: documentCreateManyUserInputEnvelope;
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[];
  };

  export type email_logsUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<email_logsCreateWithoutUserInput, email_logsUncheckedCreateWithoutUserInput>
      | email_logsCreateWithoutUserInput[]
      | email_logsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: email_logsCreateOrConnectWithoutUserInput | email_logsCreateOrConnectWithoutUserInput[];
    createMany?: email_logsCreateManyUserInputEnvelope;
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
  };

  export type it_supportUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<it_supportCreateWithoutUserInput, it_supportUncheckedCreateWithoutUserInput>
      | it_supportCreateWithoutUserInput[]
      | it_supportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: it_supportCreateOrConnectWithoutUserInput | it_supportCreateOrConnectWithoutUserInput[];
    createMany?: it_supportCreateManyUserInputEnvelope;
    connect?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
  };

  export type organizationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
  };

  export type searchUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<searchCreateWithoutUserInput, searchUncheckedCreateWithoutUserInput>
      | searchCreateWithoutUserInput[]
      | searchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: searchCreateOrConnectWithoutUserInput | searchCreateOrConnectWithoutUserInput[];
    createMany?: searchCreateManyUserInputEnvelope;
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
  };

  export type documentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput>
      | documentCreateWithoutUserInput[]
      | documentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: documentCreateOrConnectWithoutUserInput | documentCreateOrConnectWithoutUserInput[];
    upsert?: documentUpsertWithWhereUniqueWithoutUserInput | documentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: documentCreateManyUserInputEnvelope;
    set?: documentWhereUniqueInput | documentWhereUniqueInput[];
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[];
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[];
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[];
    update?: documentUpdateWithWhereUniqueWithoutUserInput | documentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: documentUpdateManyWithWhereWithoutUserInput | documentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[];
  };

  export type email_logsUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<email_logsCreateWithoutUserInput, email_logsUncheckedCreateWithoutUserInput>
      | email_logsCreateWithoutUserInput[]
      | email_logsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: email_logsCreateOrConnectWithoutUserInput | email_logsCreateOrConnectWithoutUserInput[];
    upsert?: email_logsUpsertWithWhereUniqueWithoutUserInput | email_logsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: email_logsCreateManyUserInputEnvelope;
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
    update?: email_logsUpdateWithWhereUniqueWithoutUserInput | email_logsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: email_logsUpdateManyWithWhereWithoutUserInput | email_logsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[];
  };

  export type it_supportUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<it_supportCreateWithoutUserInput, it_supportUncheckedCreateWithoutUserInput>
      | it_supportCreateWithoutUserInput[]
      | it_supportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: it_supportCreateOrConnectWithoutUserInput | it_supportCreateOrConnectWithoutUserInput[];
    upsert?: it_supportUpsertWithWhereUniqueWithoutUserInput | it_supportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: it_supportCreateManyUserInputEnvelope;
    set?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
    disconnect?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
    delete?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
    connect?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
    update?: it_supportUpdateWithWhereUniqueWithoutUserInput | it_supportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: it_supportUpdateManyWithWhereWithoutUserInput | it_supportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: it_supportScalarWhereInput | it_supportScalarWhereInput[];
  };

  export type organizationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type searchUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<searchCreateWithoutUserInput, searchUncheckedCreateWithoutUserInput>
      | searchCreateWithoutUserInput[]
      | searchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: searchCreateOrConnectWithoutUserInput | searchCreateOrConnectWithoutUserInput[];
    upsert?: searchUpsertWithWhereUniqueWithoutUserInput | searchUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: searchCreateManyUserInputEnvelope;
    set?: searchWhereUniqueInput | searchWhereUniqueInput[];
    disconnect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    delete?: searchWhereUniqueInput | searchWhereUniqueInput[];
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    update?: searchUpdateWithWhereUniqueWithoutUserInput | searchUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: searchUpdateManyWithWhereWithoutUserInput | searchUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: searchScalarWhereInput | searchScalarWhereInput[];
  };

  export type documentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput>
      | documentCreateWithoutUserInput[]
      | documentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: documentCreateOrConnectWithoutUserInput | documentCreateOrConnectWithoutUserInput[];
    upsert?: documentUpsertWithWhereUniqueWithoutUserInput | documentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: documentCreateManyUserInputEnvelope;
    set?: documentWhereUniqueInput | documentWhereUniqueInput[];
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[];
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[];
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[];
    update?: documentUpdateWithWhereUniqueWithoutUserInput | documentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: documentUpdateManyWithWhereWithoutUserInput | documentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[];
  };

  export type email_logsUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<email_logsCreateWithoutUserInput, email_logsUncheckedCreateWithoutUserInput>
      | email_logsCreateWithoutUserInput[]
      | email_logsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: email_logsCreateOrConnectWithoutUserInput | email_logsCreateOrConnectWithoutUserInput[];
    upsert?: email_logsUpsertWithWhereUniqueWithoutUserInput | email_logsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: email_logsCreateManyUserInputEnvelope;
    set?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
    disconnect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
    delete?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
    connect?: email_logsWhereUniqueInput | email_logsWhereUniqueInput[];
    update?: email_logsUpdateWithWhereUniqueWithoutUserInput | email_logsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: email_logsUpdateManyWithWhereWithoutUserInput | email_logsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: email_logsScalarWhereInput | email_logsScalarWhereInput[];
  };

  export type it_supportUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<it_supportCreateWithoutUserInput, it_supportUncheckedCreateWithoutUserInput>
      | it_supportCreateWithoutUserInput[]
      | it_supportUncheckedCreateWithoutUserInput[];
    connectOrCreate?: it_supportCreateOrConnectWithoutUserInput | it_supportCreateOrConnectWithoutUserInput[];
    upsert?: it_supportUpsertWithWhereUniqueWithoutUserInput | it_supportUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: it_supportCreateManyUserInputEnvelope;
    set?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
    disconnect?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
    delete?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
    connect?: it_supportWhereUniqueInput | it_supportWhereUniqueInput[];
    update?: it_supportUpdateWithWhereUniqueWithoutUserInput | it_supportUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: it_supportUpdateManyWithWhereWithoutUserInput | it_supportUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: it_supportScalarWhereInput | it_supportScalarWhereInput[];
  };

  export type organizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>
      | organizationCreateWithoutUserInput[]
      | organizationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput | organizationCreateOrConnectWithoutUserInput[];
    upsert?: organizationUpsertWithWhereUniqueWithoutUserInput | organizationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: organizationCreateManyUserInputEnvelope;
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[];
    update?: organizationUpdateWithWhereUniqueWithoutUserInput | organizationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: organizationUpdateManyWithWhereWithoutUserInput | organizationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[];
  };

  export type searchUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<searchCreateWithoutUserInput, searchUncheckedCreateWithoutUserInput>
      | searchCreateWithoutUserInput[]
      | searchUncheckedCreateWithoutUserInput[];
    connectOrCreate?: searchCreateOrConnectWithoutUserInput | searchCreateOrConnectWithoutUserInput[];
    upsert?: searchUpsertWithWhereUniqueWithoutUserInput | searchUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: searchCreateManyUserInputEnvelope;
    set?: searchWhereUniqueInput | searchWhereUniqueInput[];
    disconnect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    delete?: searchWhereUniqueInput | searchWhereUniqueInput[];
    connect?: searchWhereUniqueInput | searchWhereUniqueInput[];
    update?: searchUpdateWithWhereUniqueWithoutUserInput | searchUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: searchUpdateManyWithWhereWithoutUserInput | searchUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: searchScalarWhereInput | searchScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type organizationCreateWithoutDocumentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutOrganizationInput;
    search?: searchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutDocumentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    search?: searchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutDocumentInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutDocumentInput, organizationUncheckedCreateWithoutDocumentInput>;
  };

  export type userCreateWithoutDocumentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    email_logs?: email_logsCreateNestedManyWithoutUserInput;
    it_support?: it_supportCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    search?: searchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutDocumentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUserInput;
    it_support?: it_supportUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    search?: searchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutDocumentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutDocumentInput, userUncheckedCreateWithoutDocumentInput>;
  };

  export type searchCreateWithoutDocumentInput = {
    id?: string;
    query: string;
    results?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutSearchInput;
    user: userCreateNestedOneWithoutSearchInput;
  };

  export type searchUncheckedCreateWithoutDocumentInput = {
    id?: string;
    query: string;
    results?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type searchCreateOrConnectWithoutDocumentInput = {
    where: searchWhereUniqueInput;
    create: XOR<searchCreateWithoutDocumentInput, searchUncheckedCreateWithoutDocumentInput>;
  };

  export type searchCreateManyDocumentInputEnvelope = {
    data: searchCreateManyDocumentInput | searchCreateManyDocumentInput[];
    skipDuplicates?: boolean;
  };

  export type organizationUpsertWithoutDocumentInput = {
    update: XOR<organizationUpdateWithoutDocumentInput, organizationUncheckedUpdateWithoutDocumentInput>;
    create: XOR<organizationCreateWithoutDocumentInput, organizationUncheckedCreateWithoutDocumentInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutDocumentInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutDocumentInput, organizationUncheckedUpdateWithoutDocumentInput>;
  };

  export type organizationUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
    search?: searchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    search?: searchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutDocumentInput = {
    update: XOR<userUpdateWithoutDocumentInput, userUncheckedUpdateWithoutDocumentInput>;
    create: XOR<userCreateWithoutDocumentInput, userUncheckedCreateWithoutDocumentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutDocumentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutDocumentInput, userUncheckedUpdateWithoutDocumentInput>;
  };

  export type userUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    email_logs?: email_logsUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    search?: searchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    email_logs?: email_logsUncheckedUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    search?: searchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type searchUpsertWithWhereUniqueWithoutDocumentInput = {
    where: searchWhereUniqueInput;
    update: XOR<searchUpdateWithoutDocumentInput, searchUncheckedUpdateWithoutDocumentInput>;
    create: XOR<searchCreateWithoutDocumentInput, searchUncheckedCreateWithoutDocumentInput>;
  };

  export type searchUpdateWithWhereUniqueWithoutDocumentInput = {
    where: searchWhereUniqueInput;
    data: XOR<searchUpdateWithoutDocumentInput, searchUncheckedUpdateWithoutDocumentInput>;
  };

  export type searchUpdateManyWithWhereWithoutDocumentInput = {
    where: searchScalarWhereInput;
    data: XOR<searchUpdateManyMutationInput, searchUncheckedUpdateManyWithoutDocumentInput>;
  };

  export type searchScalarWhereInput = {
    AND?: searchScalarWhereInput | searchScalarWhereInput[];
    OR?: searchScalarWhereInput[];
    NOT?: searchScalarWhereInput | searchScalarWhereInput[];
    id?: UuidFilter<'search'> | string;
    query?: StringFilter<'search'> | string;
    results?: StringNullableFilter<'search'> | string | null;
    user_id?: UuidFilter<'search'> | string;
    document_id?: UuidFilter<'search'> | string;
    organization_id?: UuidFilter<'search'> | string;
    created_at?: DateTimeFilter<'search'> | Date | string;
    updated_at?: DateTimeFilter<'search'> | Date | string;
  };

  export type userCreateWithoutEmail_logsInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentCreateNestedManyWithoutUserInput;
    it_support?: it_supportCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    search?: searchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEmail_logsInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentUncheckedCreateNestedManyWithoutUserInput;
    it_support?: it_supportUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    search?: searchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEmail_logsInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmail_logsInput, userUncheckedCreateWithoutEmail_logsInput>;
  };

  export type userUpsertWithoutEmail_logsInput = {
    update: XOR<userUpdateWithoutEmail_logsInput, userUncheckedUpdateWithoutEmail_logsInput>;
    create: XOR<userCreateWithoutEmail_logsInput, userUncheckedCreateWithoutEmail_logsInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmail_logsInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmail_logsInput, userUncheckedUpdateWithoutEmail_logsInput>;
  };

  export type userUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    search?: searchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEmail_logsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUncheckedUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    search?: searchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutIt_supportInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentCreateNestedManyWithoutUserInput;
    email_logs?: email_logsCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
    search?: searchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutIt_supportInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentUncheckedCreateNestedManyWithoutUserInput;
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
    search?: searchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutIt_supportInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutIt_supportInput, userUncheckedCreateWithoutIt_supportInput>;
  };

  export type userUpsertWithoutIt_supportInput = {
    update: XOR<userUpdateWithoutIt_supportInput, userUncheckedUpdateWithoutIt_supportInput>;
    create: XOR<userCreateWithoutIt_supportInput, userUncheckedCreateWithoutIt_supportInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutIt_supportInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutIt_supportInput, userUncheckedUpdateWithoutIt_supportInput>;
  };

  export type userUpdateWithoutIt_supportInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUpdateManyWithoutUserNestedInput;
    email_logs?: email_logsUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
    search?: searchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutIt_supportInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUncheckedUpdateManyWithoutUserNestedInput;
    email_logs?: email_logsUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
    search?: searchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type documentCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutDocumentInput;
    search?: searchCreateNestedManyWithoutDocumentInput;
  };

  export type documentUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    search?: searchUncheckedCreateNestedManyWithoutDocumentInput;
  };

  export type documentCreateOrConnectWithoutOrganizationInput = {
    where: documentWhereUniqueInput;
    create: XOR<documentCreateWithoutOrganizationInput, documentUncheckedCreateWithoutOrganizationInput>;
  };

  export type documentCreateManyOrganizationInputEnvelope = {
    data: documentCreateManyOrganizationInput | documentCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentCreateNestedManyWithoutUserInput;
    email_logs?: email_logsCreateNestedManyWithoutUserInput;
    it_support?: it_supportCreateNestedManyWithoutUserInput;
    search?: searchCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentUncheckedCreateNestedManyWithoutUserInput;
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUserInput;
    it_support?: it_supportUncheckedCreateNestedManyWithoutUserInput;
    search?: searchUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type searchCreateWithoutOrganizationInput = {
    id?: string;
    query: string;
    results?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    document: documentCreateNestedOneWithoutSearchInput;
    user: userCreateNestedOneWithoutSearchInput;
  };

  export type searchUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    query: string;
    results?: string | null;
    user_id: string;
    document_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type searchCreateOrConnectWithoutOrganizationInput = {
    where: searchWhereUniqueInput;
    create: XOR<searchCreateWithoutOrganizationInput, searchUncheckedCreateWithoutOrganizationInput>;
  };

  export type searchCreateManyOrganizationInputEnvelope = {
    data: searchCreateManyOrganizationInput | searchCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type documentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: documentWhereUniqueInput;
    update: XOR<documentUpdateWithoutOrganizationInput, documentUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<documentCreateWithoutOrganizationInput, documentUncheckedCreateWithoutOrganizationInput>;
  };

  export type documentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: documentWhereUniqueInput;
    data: XOR<documentUpdateWithoutOrganizationInput, documentUncheckedUpdateWithoutOrganizationInput>;
  };

  export type documentUpdateManyWithWhereWithoutOrganizationInput = {
    where: documentScalarWhereInput;
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type documentScalarWhereInput = {
    AND?: documentScalarWhereInput | documentScalarWhereInput[];
    OR?: documentScalarWhereInput[];
    NOT?: documentScalarWhereInput | documentScalarWhereInput[];
    id?: UuidFilter<'document'> | string;
    title?: StringFilter<'document'> | string;
    content?: StringFilter<'document'> | string;
    document_type?: StringNullableFilter<'document'> | string | null;
    status?: StringNullableFilter<'document'> | string | null;
    user_id?: UuidFilter<'document'> | string;
    organization_id?: UuidFilter<'document'> | string;
    created_at?: DateTimeFilter<'document'> | Date | string;
    updated_at?: DateTimeFilter<'document'> | Date | string;
  };

  export type userUpsertWithoutOrganizationInput = {
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUpdateManyWithoutUserNestedInput;
    email_logs?: email_logsUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUpdateManyWithoutUserNestedInput;
    search?: searchUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUncheckedUpdateManyWithoutUserNestedInput;
    email_logs?: email_logsUncheckedUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUncheckedUpdateManyWithoutUserNestedInput;
    search?: searchUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type searchUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: searchWhereUniqueInput;
    update: XOR<searchUpdateWithoutOrganizationInput, searchUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<searchCreateWithoutOrganizationInput, searchUncheckedCreateWithoutOrganizationInput>;
  };

  export type searchUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: searchWhereUniqueInput;
    data: XOR<searchUpdateWithoutOrganizationInput, searchUncheckedUpdateWithoutOrganizationInput>;
  };

  export type searchUpdateManyWithWhereWithoutOrganizationInput = {
    where: searchScalarWhereInput;
    data: XOR<searchUpdateManyMutationInput, searchUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type documentCreateWithoutSearchInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutDocumentInput;
    user: userCreateNestedOneWithoutDocumentInput;
  };

  export type documentUncheckedCreateWithoutSearchInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentCreateOrConnectWithoutSearchInput = {
    where: documentWhereUniqueInput;
    create: XOR<documentCreateWithoutSearchInput, documentUncheckedCreateWithoutSearchInput>;
  };

  export type organizationCreateWithoutSearchInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    document?: documentCreateNestedManyWithoutOrganizationInput;
    user: userCreateNestedOneWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutSearchInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    document?: documentUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutSearchInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutSearchInput, organizationUncheckedCreateWithoutSearchInput>;
  };

  export type userCreateWithoutSearchInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentCreateNestedManyWithoutUserInput;
    email_logs?: email_logsCreateNestedManyWithoutUserInput;
    it_support?: it_supportCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSearchInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    document?: documentUncheckedCreateNestedManyWithoutUserInput;
    email_logs?: email_logsUncheckedCreateNestedManyWithoutUserInput;
    it_support?: it_supportUncheckedCreateNestedManyWithoutUserInput;
    organization?: organizationUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSearchInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSearchInput, userUncheckedCreateWithoutSearchInput>;
  };

  export type documentUpsertWithoutSearchInput = {
    update: XOR<documentUpdateWithoutSearchInput, documentUncheckedUpdateWithoutSearchInput>;
    create: XOR<documentCreateWithoutSearchInput, documentUncheckedCreateWithoutSearchInput>;
    where?: documentWhereInput;
  };

  export type documentUpdateToOneWithWhereWithoutSearchInput = {
    where?: documentWhereInput;
    data: XOR<documentUpdateWithoutSearchInput, documentUncheckedUpdateWithoutSearchInput>;
  };

  export type documentUpdateWithoutSearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutDocumentNestedInput;
    user?: userUpdateOneRequiredWithoutDocumentNestedInput;
  };

  export type documentUncheckedUpdateWithoutSearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpsertWithoutSearchInput = {
    update: XOR<organizationUpdateWithoutSearchInput, organizationUncheckedUpdateWithoutSearchInput>;
    create: XOR<organizationCreateWithoutSearchInput, organizationUncheckedCreateWithoutSearchInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutSearchInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutSearchInput, organizationUncheckedUpdateWithoutSearchInput>;
  };

  export type organizationUpdateWithoutSearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    document?: documentUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateOneRequiredWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutSearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    document?: documentUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type userUpsertWithoutSearchInput = {
    update: XOR<userUpdateWithoutSearchInput, userUncheckedUpdateWithoutSearchInput>;
    create: XOR<userCreateWithoutSearchInput, userUncheckedCreateWithoutSearchInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSearchInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSearchInput, userUncheckedUpdateWithoutSearchInput>;
  };

  export type userUpdateWithoutSearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUpdateManyWithoutUserNestedInput;
    email_logs?: email_logsUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSearchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUncheckedUpdateManyWithoutUserNestedInput;
    email_logs?: email_logsUncheckedUpdateManyWithoutUserNestedInput;
    it_support?: it_supportUncheckedUpdateManyWithoutUserNestedInput;
    organization?: organizationUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type documentCreateWithoutUserInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutDocumentInput;
    search?: searchCreateNestedManyWithoutDocumentInput;
  };

  export type documentUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    search?: searchUncheckedCreateNestedManyWithoutDocumentInput;
  };

  export type documentCreateOrConnectWithoutUserInput = {
    where: documentWhereUniqueInput;
    create: XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput>;
  };

  export type documentCreateManyUserInputEnvelope = {
    data: documentCreateManyUserInput | documentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type email_logsCreateWithoutUserInput = {
    id?: string;
    email_subject: string;
    email_body: string;
    sent_at?: Date | string;
    status: string;
    recipient_email: string;
    sender_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type email_logsUncheckedCreateWithoutUserInput = {
    id?: string;
    email_subject: string;
    email_body: string;
    sent_at?: Date | string;
    status: string;
    recipient_email: string;
    sender_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type email_logsCreateOrConnectWithoutUserInput = {
    where: email_logsWhereUniqueInput;
    create: XOR<email_logsCreateWithoutUserInput, email_logsUncheckedCreateWithoutUserInput>;
  };

  export type email_logsCreateManyUserInputEnvelope = {
    data: email_logsCreateManyUserInput | email_logsCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type it_supportCreateWithoutUserInput = {
    id?: string;
    issue_description: string;
    status: string;
    priority?: string | null;
    resolved_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type it_supportUncheckedCreateWithoutUserInput = {
    id?: string;
    issue_description: string;
    status: string;
    priority?: string | null;
    resolved_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type it_supportCreateOrConnectWithoutUserInput = {
    where: it_supportWhereUniqueInput;
    create: XOR<it_supportCreateWithoutUserInput, it_supportUncheckedCreateWithoutUserInput>;
  };

  export type it_supportCreateManyUserInputEnvelope = {
    data: it_supportCreateManyUserInput | it_supportCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    document?: documentCreateNestedManyWithoutOrganizationInput;
    search?: searchCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    document?: documentUncheckedCreateNestedManyWithoutOrganizationInput;
    search?: searchUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationCreateManyUserInputEnvelope = {
    data: organizationCreateManyUserInput | organizationCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type searchCreateWithoutUserInput = {
    id?: string;
    query: string;
    results?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    document: documentCreateNestedOneWithoutSearchInput;
    organization: organizationCreateNestedOneWithoutSearchInput;
  };

  export type searchUncheckedCreateWithoutUserInput = {
    id?: string;
    query: string;
    results?: string | null;
    document_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type searchCreateOrConnectWithoutUserInput = {
    where: searchWhereUniqueInput;
    create: XOR<searchCreateWithoutUserInput, searchUncheckedCreateWithoutUserInput>;
  };

  export type searchCreateManyUserInputEnvelope = {
    data: searchCreateManyUserInput | searchCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type documentUpsertWithWhereUniqueWithoutUserInput = {
    where: documentWhereUniqueInput;
    update: XOR<documentUpdateWithoutUserInput, documentUncheckedUpdateWithoutUserInput>;
    create: XOR<documentCreateWithoutUserInput, documentUncheckedCreateWithoutUserInput>;
  };

  export type documentUpdateWithWhereUniqueWithoutUserInput = {
    where: documentWhereUniqueInput;
    data: XOR<documentUpdateWithoutUserInput, documentUncheckedUpdateWithoutUserInput>;
  };

  export type documentUpdateManyWithWhereWithoutUserInput = {
    where: documentScalarWhereInput;
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyWithoutUserInput>;
  };

  export type email_logsUpsertWithWhereUniqueWithoutUserInput = {
    where: email_logsWhereUniqueInput;
    update: XOR<email_logsUpdateWithoutUserInput, email_logsUncheckedUpdateWithoutUserInput>;
    create: XOR<email_logsCreateWithoutUserInput, email_logsUncheckedCreateWithoutUserInput>;
  };

  export type email_logsUpdateWithWhereUniqueWithoutUserInput = {
    where: email_logsWhereUniqueInput;
    data: XOR<email_logsUpdateWithoutUserInput, email_logsUncheckedUpdateWithoutUserInput>;
  };

  export type email_logsUpdateManyWithWhereWithoutUserInput = {
    where: email_logsScalarWhereInput;
    data: XOR<email_logsUpdateManyMutationInput, email_logsUncheckedUpdateManyWithoutUserInput>;
  };

  export type email_logsScalarWhereInput = {
    AND?: email_logsScalarWhereInput | email_logsScalarWhereInput[];
    OR?: email_logsScalarWhereInput[];
    NOT?: email_logsScalarWhereInput | email_logsScalarWhereInput[];
    id?: UuidFilter<'email_logs'> | string;
    user_id?: UuidFilter<'email_logs'> | string;
    email_subject?: StringFilter<'email_logs'> | string;
    email_body?: StringFilter<'email_logs'> | string;
    sent_at?: DateTimeFilter<'email_logs'> | Date | string;
    status?: StringFilter<'email_logs'> | string;
    recipient_email?: StringFilter<'email_logs'> | string;
    sender_email?: StringFilter<'email_logs'> | string;
    created_at?: DateTimeFilter<'email_logs'> | Date | string;
    updated_at?: DateTimeFilter<'email_logs'> | Date | string;
  };

  export type it_supportUpsertWithWhereUniqueWithoutUserInput = {
    where: it_supportWhereUniqueInput;
    update: XOR<it_supportUpdateWithoutUserInput, it_supportUncheckedUpdateWithoutUserInput>;
    create: XOR<it_supportCreateWithoutUserInput, it_supportUncheckedCreateWithoutUserInput>;
  };

  export type it_supportUpdateWithWhereUniqueWithoutUserInput = {
    where: it_supportWhereUniqueInput;
    data: XOR<it_supportUpdateWithoutUserInput, it_supportUncheckedUpdateWithoutUserInput>;
  };

  export type it_supportUpdateManyWithWhereWithoutUserInput = {
    where: it_supportScalarWhereInput;
    data: XOR<it_supportUpdateManyMutationInput, it_supportUncheckedUpdateManyWithoutUserInput>;
  };

  export type it_supportScalarWhereInput = {
    AND?: it_supportScalarWhereInput | it_supportScalarWhereInput[];
    OR?: it_supportScalarWhereInput[];
    NOT?: it_supportScalarWhereInput | it_supportScalarWhereInput[];
    id?: UuidFilter<'it_support'> | string;
    user_id?: UuidFilter<'it_support'> | string;
    issue_description?: StringFilter<'it_support'> | string;
    status?: StringFilter<'it_support'> | string;
    priority?: StringNullableFilter<'it_support'> | string | null;
    resolved_at?: DateTimeNullableFilter<'it_support'> | Date | string | null;
    created_at?: DateTimeFilter<'it_support'> | Date | string;
    updated_at?: DateTimeFilter<'it_support'> | Date | string;
  };

  export type organizationUpsertWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpdateWithWhereUniqueWithoutUserInput = {
    where: organizationWhereUniqueInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateManyWithWhereWithoutUserInput = {
    where: organizationScalarWhereInput;
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutUserInput>;
  };

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[];
    OR?: organizationScalarWhereInput[];
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    address?: StringNullableFilter<'organization'> | string | null;
    city?: StringNullableFilter<'organization'> | string | null;
    state?: StringNullableFilter<'organization'> | string | null;
    zip_code?: StringNullableFilter<'organization'> | string | null;
    country?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user_id?: UuidFilter<'organization'> | string;
    tenant_id?: StringFilter<'organization'> | string;
  };

  export type searchUpsertWithWhereUniqueWithoutUserInput = {
    where: searchWhereUniqueInput;
    update: XOR<searchUpdateWithoutUserInput, searchUncheckedUpdateWithoutUserInput>;
    create: XOR<searchCreateWithoutUserInput, searchUncheckedCreateWithoutUserInput>;
  };

  export type searchUpdateWithWhereUniqueWithoutUserInput = {
    where: searchWhereUniqueInput;
    data: XOR<searchUpdateWithoutUserInput, searchUncheckedUpdateWithoutUserInput>;
  };

  export type searchUpdateManyWithWhereWithoutUserInput = {
    where: searchScalarWhereInput;
    data: XOR<searchUpdateManyMutationInput, searchUncheckedUpdateManyWithoutUserInput>;
  };

  export type searchCreateManyDocumentInput = {
    id?: string;
    query: string;
    results?: string | null;
    user_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type searchUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutSearchNestedInput;
    user?: userUpdateOneRequiredWithoutSearchNestedInput;
  };

  export type searchUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type searchUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentCreateManyOrganizationInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type searchCreateManyOrganizationInput = {
    id?: string;
    query: string;
    results?: string | null;
    user_id: string;
    document_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutDocumentNestedInput;
    search?: searchUpdateManyWithoutDocumentNestedInput;
  };

  export type documentUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    search?: searchUncheckedUpdateManyWithoutDocumentNestedInput;
  };

  export type documentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type searchUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUpdateOneRequiredWithoutSearchNestedInput;
    user?: userUpdateOneRequiredWithoutSearchNestedInput;
  };

  export type searchUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    document_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type searchUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    document_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentCreateManyUserInput = {
    id?: string;
    title: string;
    content: string;
    document_type?: string | null;
    status?: string | null;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type email_logsCreateManyUserInput = {
    id?: string;
    email_subject: string;
    email_body: string;
    sent_at?: Date | string;
    status: string;
    recipient_email: string;
    sender_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type it_supportCreateManyUserInput = {
    id?: string;
    issue_description: string;
    status: string;
    priority?: string | null;
    resolved_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type searchCreateManyUserInput = {
    id?: string;
    query: string;
    results?: string | null;
    document_id: string;
    organization_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutDocumentNestedInput;
    search?: searchUpdateManyWithoutDocumentNestedInput;
  };

  export type documentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    search?: searchUncheckedUpdateManyWithoutDocumentNestedInput;
  };

  export type documentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    document_type?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type email_logsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email_subject?: StringFieldUpdateOperationsInput | string;
    email_body?: StringFieldUpdateOperationsInput | string;
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    recipient_email?: StringFieldUpdateOperationsInput | string;
    sender_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type email_logsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email_subject?: StringFieldUpdateOperationsInput | string;
    email_body?: StringFieldUpdateOperationsInput | string;
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    recipient_email?: StringFieldUpdateOperationsInput | string;
    sender_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type email_logsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email_subject?: StringFieldUpdateOperationsInput | string;
    email_body?: StringFieldUpdateOperationsInput | string;
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    recipient_email?: StringFieldUpdateOperationsInput | string;
    sender_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type it_supportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    priority?: NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type it_supportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    priority?: NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type it_supportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    issue_description?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    priority?: NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    document?: documentUpdateManyWithoutOrganizationNestedInput;
    search?: searchUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    document?: documentUncheckedUpdateManyWithoutOrganizationNestedInput;
    search?: searchUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    country?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type searchUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    document?: documentUpdateOneRequiredWithoutSearchNestedInput;
    organization?: organizationUpdateOneRequiredWithoutSearchNestedInput;
  };

  export type searchUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    document_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type searchUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    query?: StringFieldUpdateOperationsInput | string;
    results?: NullableStringFieldUpdateOperationsInput | string | null;
    document_id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use DocumentCountOutputTypeDefaultArgs instead
   */
  export type DocumentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    DocumentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use documentDefaultArgs instead
   */
  export type documentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    documentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use email_logsDefaultArgs instead
   */
  export type email_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    email_logsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use it_supportDefaultArgs instead
   */
  export type it_supportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    it_supportDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use searchDefaultArgs instead
   */
  export type searchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    searchDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
