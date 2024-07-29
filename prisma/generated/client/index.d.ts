
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model MaterialSupplier
 * 
 */
export type MaterialSupplier = $Result.DefaultSelection<Prisma.$MaterialSupplierPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model Usage
 * 
 */
export type Usage = $Result.DefaultSelection<Prisma.$UsagePayload>
/**
 * Model FinishedGoods
 * 
 */
export type FinishedGoods = $Result.DefaultSelection<Prisma.$FinishedGoodsPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model FinishedGoodStock
 * 
 */
export type FinishedGoodStock = $Result.DefaultSelection<Prisma.$FinishedGoodStockPayload>
/**
 * Model Quotation
 * 
 */
export type Quotation = $Result.DefaultSelection<Prisma.$QuotationPayload>
/**
 * Model QuotationItem
 * 
 */
export type QuotationItem = $Result.DefaultSelection<Prisma.$QuotationItemPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model DeliveryNotes
 * 
 */
export type DeliveryNotes = $Result.DefaultSelection<Prisma.$DeliveryNotesPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs>;

  /**
   * `prisma.materialSupplier`: Exposes CRUD operations for the **MaterialSupplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialSuppliers
    * const materialSuppliers = await prisma.materialSupplier.findMany()
    * ```
    */
  get materialSupplier(): Prisma.MaterialSupplierDelegate<ExtArgs>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs>;

  /**
   * `prisma.usage`: Exposes CRUD operations for the **Usage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usages
    * const usages = await prisma.usage.findMany()
    * ```
    */
  get usage(): Prisma.UsageDelegate<ExtArgs>;

  /**
   * `prisma.finishedGoods`: Exposes CRUD operations for the **FinishedGoods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinishedGoods
    * const finishedGoods = await prisma.finishedGoods.findMany()
    * ```
    */
  get finishedGoods(): Prisma.FinishedGoodsDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.finishedGoodStock`: Exposes CRUD operations for the **FinishedGoodStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinishedGoodStocks
    * const finishedGoodStocks = await prisma.finishedGoodStock.findMany()
    * ```
    */
  get finishedGoodStock(): Prisma.FinishedGoodStockDelegate<ExtArgs>;

  /**
   * `prisma.quotation`: Exposes CRUD operations for the **Quotation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotations
    * const quotations = await prisma.quotation.findMany()
    * ```
    */
  get quotation(): Prisma.QuotationDelegate<ExtArgs>;

  /**
   * `prisma.quotationItem`: Exposes CRUD operations for the **QuotationItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuotationItems
    * const quotationItems = await prisma.quotationItem.findMany()
    * ```
    */
  get quotationItem(): Prisma.QuotationItemDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.deliveryNotes`: Exposes CRUD operations for the **DeliveryNotes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryNotes
    * const deliveryNotes = await prisma.deliveryNotes.findMany()
    * ```
    */
  get deliveryNotes(): Prisma.DeliveryNotesDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    User: 'User',
    Material: 'Material',
    Supplier: 'Supplier',
    MaterialSupplier: 'MaterialSupplier',
    Stock: 'Stock',
    Usage: 'Usage',
    FinishedGoods: 'FinishedGoods',
    Category: 'Category',
    FinishedGoodStock: 'FinishedGoodStock',
    Quotation: 'Quotation',
    QuotationItem: 'QuotationItem',
    Orders: 'Orders',
    OrderItem: 'OrderItem',
    DeliveryNotes: 'DeliveryNotes',
    Invoice: 'Invoice',
    Sales: 'Sales'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "post" | "user" | "material" | "supplier" | "materialSupplier" | "stock" | "usage" | "finishedGoods" | "category" | "finishedGoodStock" | "quotation" | "quotationItem" | "orders" | "orderItem" | "deliveryNotes" | "invoice" | "sales"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      MaterialSupplier: {
        payload: Prisma.$MaterialSupplierPayload<ExtArgs>
        fields: Prisma.MaterialSupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialSupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialSupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload>
          }
          findFirst: {
            args: Prisma.MaterialSupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialSupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload>
          }
          findMany: {
            args: Prisma.MaterialSupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload>[]
          }
          create: {
            args: Prisma.MaterialSupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload>
          }
          createMany: {
            args: Prisma.MaterialSupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialSupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload>[]
          }
          delete: {
            args: Prisma.MaterialSupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload>
          }
          update: {
            args: Prisma.MaterialSupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload>
          }
          deleteMany: {
            args: Prisma.MaterialSupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialSupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialSupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialSupplierPayload>
          }
          aggregate: {
            args: Prisma.MaterialSupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialSupplier>
          }
          groupBy: {
            args: Prisma.MaterialSupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialSupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialSupplierCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialSupplierCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      Usage: {
        payload: Prisma.$UsagePayload<ExtArgs>
        fields: Prisma.UsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          findFirst: {
            args: Prisma.UsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          findMany: {
            args: Prisma.UsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>[]
          }
          create: {
            args: Prisma.UsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          createMany: {
            args: Prisma.UsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>[]
          }
          delete: {
            args: Prisma.UsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          update: {
            args: Prisma.UsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          deleteMany: {
            args: Prisma.UsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsagePayload>
          }
          aggregate: {
            args: Prisma.UsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsage>
          }
          groupBy: {
            args: Prisma.UsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageCountArgs<ExtArgs>
            result: $Utils.Optional<UsageCountAggregateOutputType> | number
          }
        }
      }
      FinishedGoods: {
        payload: Prisma.$FinishedGoodsPayload<ExtArgs>
        fields: Prisma.FinishedGoodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinishedGoodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinishedGoodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload>
          }
          findFirst: {
            args: Prisma.FinishedGoodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinishedGoodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload>
          }
          findMany: {
            args: Prisma.FinishedGoodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload>[]
          }
          create: {
            args: Prisma.FinishedGoodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload>
          }
          createMany: {
            args: Prisma.FinishedGoodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinishedGoodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload>[]
          }
          delete: {
            args: Prisma.FinishedGoodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload>
          }
          update: {
            args: Prisma.FinishedGoodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload>
          }
          deleteMany: {
            args: Prisma.FinishedGoodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinishedGoodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinishedGoodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodsPayload>
          }
          aggregate: {
            args: Prisma.FinishedGoodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinishedGoods>
          }
          groupBy: {
            args: Prisma.FinishedGoodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinishedGoodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinishedGoodsCountArgs<ExtArgs>
            result: $Utils.Optional<FinishedGoodsCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      FinishedGoodStock: {
        payload: Prisma.$FinishedGoodStockPayload<ExtArgs>
        fields: Prisma.FinishedGoodStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinishedGoodStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinishedGoodStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload>
          }
          findFirst: {
            args: Prisma.FinishedGoodStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinishedGoodStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload>
          }
          findMany: {
            args: Prisma.FinishedGoodStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload>[]
          }
          create: {
            args: Prisma.FinishedGoodStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload>
          }
          createMany: {
            args: Prisma.FinishedGoodStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinishedGoodStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload>[]
          }
          delete: {
            args: Prisma.FinishedGoodStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload>
          }
          update: {
            args: Prisma.FinishedGoodStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload>
          }
          deleteMany: {
            args: Prisma.FinishedGoodStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinishedGoodStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FinishedGoodStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishedGoodStockPayload>
          }
          aggregate: {
            args: Prisma.FinishedGoodStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinishedGoodStock>
          }
          groupBy: {
            args: Prisma.FinishedGoodStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinishedGoodStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinishedGoodStockCountArgs<ExtArgs>
            result: $Utils.Optional<FinishedGoodStockCountAggregateOutputType> | number
          }
        }
      }
      Quotation: {
        payload: Prisma.$QuotationPayload<ExtArgs>
        fields: Prisma.QuotationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findFirst: {
            args: Prisma.QuotationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          findMany: {
            args: Prisma.QuotationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          create: {
            args: Prisma.QuotationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          createMany: {
            args: Prisma.QuotationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>[]
          }
          delete: {
            args: Prisma.QuotationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          update: {
            args: Prisma.QuotationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          deleteMany: {
            args: Prisma.QuotationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuotationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationPayload>
          }
          aggregate: {
            args: Prisma.QuotationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotation>
          }
          groupBy: {
            args: Prisma.QuotationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationCountAggregateOutputType> | number
          }
        }
      }
      QuotationItem: {
        payload: Prisma.$QuotationItemPayload<ExtArgs>
        fields: Prisma.QuotationItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          findFirst: {
            args: Prisma.QuotationItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          findMany: {
            args: Prisma.QuotationItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>[]
          }
          create: {
            args: Prisma.QuotationItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          createMany: {
            args: Prisma.QuotationItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>[]
          }
          delete: {
            args: Prisma.QuotationItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          update: {
            args: Prisma.QuotationItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          deleteMany: {
            args: Prisma.QuotationItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuotationItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationItemPayload>
          }
          aggregate: {
            args: Prisma.QuotationItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotationItem>
          }
          groupBy: {
            args: Prisma.QuotationItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationItemCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationItemCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      DeliveryNotes: {
        payload: Prisma.$DeliveryNotesPayload<ExtArgs>
        fields: Prisma.DeliveryNotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryNotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryNotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload>
          }
          findFirst: {
            args: Prisma.DeliveryNotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryNotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload>
          }
          findMany: {
            args: Prisma.DeliveryNotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload>[]
          }
          create: {
            args: Prisma.DeliveryNotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload>
          }
          createMany: {
            args: Prisma.DeliveryNotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryNotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload>[]
          }
          delete: {
            args: Prisma.DeliveryNotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload>
          }
          update: {
            args: Prisma.DeliveryNotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryNotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryNotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryNotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotesPayload>
          }
          aggregate: {
            args: Prisma.DeliveryNotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryNotes>
          }
          groupBy: {
            args: Prisma.DeliveryNotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryNotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryNotesCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryNotesCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    stock: number
    usage: number
    MaterialSupplier: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | MaterialCountOutputTypeCountStockArgs
    usage?: boolean | MaterialCountOutputTypeCountUsageArgs
    MaterialSupplier?: boolean | MaterialCountOutputTypeCountMaterialSupplierArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountMaterialSupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialSupplierWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    materials: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | SupplierCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialSupplierWhereInput
  }


  /**
   * Count Type QuotationCountOutputType
   */

  export type QuotationCountOutputType = {
    items: number
    orders: number
  }

  export type QuotationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | QuotationCountOutputTypeCountItemsArgs
    orders?: boolean | QuotationCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCountOutputType
     */
    select?: QuotationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationItemWhereInput
  }

  /**
   * QuotationCountOutputType without action
   */
  export type QuotationCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    items: number
    invoices: number
    deliveryNotes: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrdersCountOutputTypeCountItemsArgs
    invoices?: boolean | OrdersCountOutputTypeCountInvoicesArgs
    deliveryNotes?: boolean | OrdersCountOutputTypeCountDeliveryNotesArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountDeliveryNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryNotesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    published: boolean | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    published: boolean | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    published: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    createAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    createAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    published?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    published: boolean
    createAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    published?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      published: boolean
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly createAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    hashedPassword: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    hashedPassword: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    hashedPassword: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    hashedPassword?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    hashedPassword?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    hashedPassword?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    hashedPassword: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hashedPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    hashedPassword?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    hashedPassword?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      hashedPassword: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    costPerUnit: number | null
  }

  export type MaterialSumAggregateOutputType = {
    costPerUnit: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    unit: string | null
    costPerUnit: number | null
    category: string | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    unit: string | null
    costPerUnit: number | null
    category: string | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    name: number
    description: number
    unit: number
    costPerUnit: number
    category: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    costPerUnit?: true
  }

  export type MaterialSumAggregateInputType = {
    costPerUnit?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit?: true
    costPerUnit?: true
    category?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit?: true
    costPerUnit?: true
    category?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit?: true
    costPerUnit?: true
    category?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    name: string
    description: string | null
    unit: string
    costPerUnit: number
    category: string
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    costPerUnit?: boolean
    category?: boolean
    stock?: boolean | Material$stockArgs<ExtArgs>
    usage?: boolean | Material$usageArgs<ExtArgs>
    MaterialSupplier?: boolean | Material$MaterialSupplierArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    costPerUnit?: boolean
    category?: boolean
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    costPerUnit?: boolean
    category?: boolean
  }

  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | Material$stockArgs<ExtArgs>
    usage?: boolean | Material$usageArgs<ExtArgs>
    MaterialSupplier?: boolean | Material$MaterialSupplierArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      stock: Prisma.$StockPayload<ExtArgs>[]
      usage: Prisma.$UsagePayload<ExtArgs>[]
      MaterialSupplier: Prisma.$MaterialSupplierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      unit: string
      costPerUnit: number
      category: string
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock<T extends Material$stockArgs<ExtArgs> = {}>(args?: Subset<T, Material$stockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany"> | Null>
    usage<T extends Material$usageArgs<ExtArgs> = {}>(args?: Subset<T, Material$usageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findMany"> | Null>
    MaterialSupplier<T extends Material$MaterialSupplierArgs<ExtArgs> = {}>(args?: Subset<T, Material$MaterialSupplierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Material model
   */ 
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly description: FieldRef<"Material", 'String'>
    readonly unit: FieldRef<"Material", 'String'>
    readonly costPerUnit: FieldRef<"Material", 'Float'>
    readonly category: FieldRef<"Material", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
  }

  /**
   * Material.stock
   */
  export type Material$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    where?: StockWhereInput
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    cursor?: StockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Material.usage
   */
  export type Material$usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    where?: UsageWhereInput
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    cursor?: UsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageScalarFieldEnum | UsageScalarFieldEnum[]
  }

  /**
   * Material.MaterialSupplier
   */
  export type Material$MaterialSupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    where?: MaterialSupplierWhereInput
    orderBy?: MaterialSupplierOrderByWithRelationInput | MaterialSupplierOrderByWithRelationInput[]
    cursor?: MaterialSupplierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialSupplierScalarFieldEnum | MaterialSupplierScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    contactInfo: string | null
    address: string | null
    email: string | null
    phone: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contactInfo: string | null
    address: string | null
    email: string | null
    phone: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    contactInfo: number
    address: number
    email: number
    phone: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    contactInfo?: true
    address?: true
    email?: true
    phone?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    contactInfo?: true
    address?: true
    email?: true
    phone?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    contactInfo?: true
    address?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    contactInfo: string | null
    address: string | null
    email: string
    phone: string
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactInfo?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
    materials?: boolean | Supplier$materialsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactInfo?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    contactInfo?: boolean
    address?: boolean
    email?: boolean
    phone?: boolean
  }

  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | Supplier$materialsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      materials: Prisma.$MaterialSupplierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contactInfo: string | null
      address: string | null
      email: string
      phone: string
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends Supplier$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */ 
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly contactInfo: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier.materials
   */
  export type Supplier$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    where?: MaterialSupplierWhereInput
    orderBy?: MaterialSupplierOrderByWithRelationInput | MaterialSupplierOrderByWithRelationInput[]
    cursor?: MaterialSupplierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialSupplierScalarFieldEnum | MaterialSupplierScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model MaterialSupplier
   */

  export type AggregateMaterialSupplier = {
    _count: MaterialSupplierCountAggregateOutputType | null
    _min: MaterialSupplierMinAggregateOutputType | null
    _max: MaterialSupplierMaxAggregateOutputType | null
  }

  export type MaterialSupplierMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    supplierId: string | null
  }

  export type MaterialSupplierMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    supplierId: string | null
  }

  export type MaterialSupplierCountAggregateOutputType = {
    id: number
    materialId: number
    supplierId: number
    _all: number
  }


  export type MaterialSupplierMinAggregateInputType = {
    id?: true
    materialId?: true
    supplierId?: true
  }

  export type MaterialSupplierMaxAggregateInputType = {
    id?: true
    materialId?: true
    supplierId?: true
  }

  export type MaterialSupplierCountAggregateInputType = {
    id?: true
    materialId?: true
    supplierId?: true
    _all?: true
  }

  export type MaterialSupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialSupplier to aggregate.
     */
    where?: MaterialSupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialSuppliers to fetch.
     */
    orderBy?: MaterialSupplierOrderByWithRelationInput | MaterialSupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialSupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialSuppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialSuppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialSuppliers
    **/
    _count?: true | MaterialSupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialSupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialSupplierMaxAggregateInputType
  }

  export type GetMaterialSupplierAggregateType<T extends MaterialSupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialSupplier[P]>
      : GetScalarType<T[P], AggregateMaterialSupplier[P]>
  }




  export type MaterialSupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialSupplierWhereInput
    orderBy?: MaterialSupplierOrderByWithAggregationInput | MaterialSupplierOrderByWithAggregationInput[]
    by: MaterialSupplierScalarFieldEnum[] | MaterialSupplierScalarFieldEnum
    having?: MaterialSupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialSupplierCountAggregateInputType | true
    _min?: MaterialSupplierMinAggregateInputType
    _max?: MaterialSupplierMaxAggregateInputType
  }

  export type MaterialSupplierGroupByOutputType = {
    id: string
    materialId: string
    supplierId: string
    _count: MaterialSupplierCountAggregateOutputType | null
    _min: MaterialSupplierMinAggregateOutputType | null
    _max: MaterialSupplierMaxAggregateOutputType | null
  }

  type GetMaterialSupplierGroupByPayload<T extends MaterialSupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialSupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialSupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialSupplierGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialSupplierGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    supplierId?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialSupplier"]>

  export type MaterialSupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    supplierId?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialSupplier"]>

  export type MaterialSupplierSelectScalar = {
    id?: boolean
    materialId?: boolean
    supplierId?: boolean
  }

  export type MaterialSupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type MaterialSupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $MaterialSupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialSupplier"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      supplierId: string
    }, ExtArgs["result"]["materialSupplier"]>
    composites: {}
  }

  type MaterialSupplierGetPayload<S extends boolean | null | undefined | MaterialSupplierDefaultArgs> = $Result.GetResult<Prisma.$MaterialSupplierPayload, S>

  type MaterialSupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaterialSupplierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaterialSupplierCountAggregateInputType | true
    }

  export interface MaterialSupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialSupplier'], meta: { name: 'MaterialSupplier' } }
    /**
     * Find zero or one MaterialSupplier that matches the filter.
     * @param {MaterialSupplierFindUniqueArgs} args - Arguments to find a MaterialSupplier
     * @example
     * // Get one MaterialSupplier
     * const materialSupplier = await prisma.materialSupplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialSupplierFindUniqueArgs>(args: SelectSubset<T, MaterialSupplierFindUniqueArgs<ExtArgs>>): Prisma__MaterialSupplierClient<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MaterialSupplier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaterialSupplierFindUniqueOrThrowArgs} args - Arguments to find a MaterialSupplier
     * @example
     * // Get one MaterialSupplier
     * const materialSupplier = await prisma.materialSupplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialSupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialSupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialSupplierClient<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MaterialSupplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialSupplierFindFirstArgs} args - Arguments to find a MaterialSupplier
     * @example
     * // Get one MaterialSupplier
     * const materialSupplier = await prisma.materialSupplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialSupplierFindFirstArgs>(args?: SelectSubset<T, MaterialSupplierFindFirstArgs<ExtArgs>>): Prisma__MaterialSupplierClient<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MaterialSupplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialSupplierFindFirstOrThrowArgs} args - Arguments to find a MaterialSupplier
     * @example
     * // Get one MaterialSupplier
     * const materialSupplier = await prisma.materialSupplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialSupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialSupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialSupplierClient<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MaterialSuppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialSupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialSuppliers
     * const materialSuppliers = await prisma.materialSupplier.findMany()
     * 
     * // Get first 10 MaterialSuppliers
     * const materialSuppliers = await prisma.materialSupplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialSupplierWithIdOnly = await prisma.materialSupplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialSupplierFindManyArgs>(args?: SelectSubset<T, MaterialSupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MaterialSupplier.
     * @param {MaterialSupplierCreateArgs} args - Arguments to create a MaterialSupplier.
     * @example
     * // Create one MaterialSupplier
     * const MaterialSupplier = await prisma.materialSupplier.create({
     *   data: {
     *     // ... data to create a MaterialSupplier
     *   }
     * })
     * 
     */
    create<T extends MaterialSupplierCreateArgs>(args: SelectSubset<T, MaterialSupplierCreateArgs<ExtArgs>>): Prisma__MaterialSupplierClient<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MaterialSuppliers.
     * @param {MaterialSupplierCreateManyArgs} args - Arguments to create many MaterialSuppliers.
     * @example
     * // Create many MaterialSuppliers
     * const materialSupplier = await prisma.materialSupplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialSupplierCreateManyArgs>(args?: SelectSubset<T, MaterialSupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialSuppliers and returns the data saved in the database.
     * @param {MaterialSupplierCreateManyAndReturnArgs} args - Arguments to create many MaterialSuppliers.
     * @example
     * // Create many MaterialSuppliers
     * const materialSupplier = await prisma.materialSupplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialSuppliers and only return the `id`
     * const materialSupplierWithIdOnly = await prisma.materialSupplier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialSupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialSupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MaterialSupplier.
     * @param {MaterialSupplierDeleteArgs} args - Arguments to delete one MaterialSupplier.
     * @example
     * // Delete one MaterialSupplier
     * const MaterialSupplier = await prisma.materialSupplier.delete({
     *   where: {
     *     // ... filter to delete one MaterialSupplier
     *   }
     * })
     * 
     */
    delete<T extends MaterialSupplierDeleteArgs>(args: SelectSubset<T, MaterialSupplierDeleteArgs<ExtArgs>>): Prisma__MaterialSupplierClient<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MaterialSupplier.
     * @param {MaterialSupplierUpdateArgs} args - Arguments to update one MaterialSupplier.
     * @example
     * // Update one MaterialSupplier
     * const materialSupplier = await prisma.materialSupplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialSupplierUpdateArgs>(args: SelectSubset<T, MaterialSupplierUpdateArgs<ExtArgs>>): Prisma__MaterialSupplierClient<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MaterialSuppliers.
     * @param {MaterialSupplierDeleteManyArgs} args - Arguments to filter MaterialSuppliers to delete.
     * @example
     * // Delete a few MaterialSuppliers
     * const { count } = await prisma.materialSupplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialSupplierDeleteManyArgs>(args?: SelectSubset<T, MaterialSupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialSuppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialSupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialSuppliers
     * const materialSupplier = await prisma.materialSupplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialSupplierUpdateManyArgs>(args: SelectSubset<T, MaterialSupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaterialSupplier.
     * @param {MaterialSupplierUpsertArgs} args - Arguments to update or create a MaterialSupplier.
     * @example
     * // Update or create a MaterialSupplier
     * const materialSupplier = await prisma.materialSupplier.upsert({
     *   create: {
     *     // ... data to create a MaterialSupplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialSupplier we want to update
     *   }
     * })
     */
    upsert<T extends MaterialSupplierUpsertArgs>(args: SelectSubset<T, MaterialSupplierUpsertArgs<ExtArgs>>): Prisma__MaterialSupplierClient<$Result.GetResult<Prisma.$MaterialSupplierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MaterialSuppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialSupplierCountArgs} args - Arguments to filter MaterialSuppliers to count.
     * @example
     * // Count the number of MaterialSuppliers
     * const count = await prisma.materialSupplier.count({
     *   where: {
     *     // ... the filter for the MaterialSuppliers we want to count
     *   }
     * })
    **/
    count<T extends MaterialSupplierCountArgs>(
      args?: Subset<T, MaterialSupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialSupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialSupplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialSupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialSupplierAggregateArgs>(args: Subset<T, MaterialSupplierAggregateArgs>): Prisma.PrismaPromise<GetMaterialSupplierAggregateType<T>>

    /**
     * Group by MaterialSupplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialSupplierGroupByArgs} args - Group by arguments.
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
      T extends MaterialSupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialSupplierGroupByArgs['orderBy'] }
        : { orderBy?: MaterialSupplierGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialSupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialSupplier model
   */
  readonly fields: MaterialSupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialSupplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialSupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaterialSupplier model
   */ 
  interface MaterialSupplierFieldRefs {
    readonly id: FieldRef<"MaterialSupplier", 'String'>
    readonly materialId: FieldRef<"MaterialSupplier", 'String'>
    readonly supplierId: FieldRef<"MaterialSupplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MaterialSupplier findUnique
   */
  export type MaterialSupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * Filter, which MaterialSupplier to fetch.
     */
    where: MaterialSupplierWhereUniqueInput
  }

  /**
   * MaterialSupplier findUniqueOrThrow
   */
  export type MaterialSupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * Filter, which MaterialSupplier to fetch.
     */
    where: MaterialSupplierWhereUniqueInput
  }

  /**
   * MaterialSupplier findFirst
   */
  export type MaterialSupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * Filter, which MaterialSupplier to fetch.
     */
    where?: MaterialSupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialSuppliers to fetch.
     */
    orderBy?: MaterialSupplierOrderByWithRelationInput | MaterialSupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialSuppliers.
     */
    cursor?: MaterialSupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialSuppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialSuppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialSuppliers.
     */
    distinct?: MaterialSupplierScalarFieldEnum | MaterialSupplierScalarFieldEnum[]
  }

  /**
   * MaterialSupplier findFirstOrThrow
   */
  export type MaterialSupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * Filter, which MaterialSupplier to fetch.
     */
    where?: MaterialSupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialSuppliers to fetch.
     */
    orderBy?: MaterialSupplierOrderByWithRelationInput | MaterialSupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialSuppliers.
     */
    cursor?: MaterialSupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialSuppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialSuppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialSuppliers.
     */
    distinct?: MaterialSupplierScalarFieldEnum | MaterialSupplierScalarFieldEnum[]
  }

  /**
   * MaterialSupplier findMany
   */
  export type MaterialSupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * Filter, which MaterialSuppliers to fetch.
     */
    where?: MaterialSupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialSuppliers to fetch.
     */
    orderBy?: MaterialSupplierOrderByWithRelationInput | MaterialSupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialSuppliers.
     */
    cursor?: MaterialSupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialSuppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialSuppliers.
     */
    skip?: number
    distinct?: MaterialSupplierScalarFieldEnum | MaterialSupplierScalarFieldEnum[]
  }

  /**
   * MaterialSupplier create
   */
  export type MaterialSupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialSupplier.
     */
    data: XOR<MaterialSupplierCreateInput, MaterialSupplierUncheckedCreateInput>
  }

  /**
   * MaterialSupplier createMany
   */
  export type MaterialSupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialSuppliers.
     */
    data: MaterialSupplierCreateManyInput | MaterialSupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialSupplier createManyAndReturn
   */
  export type MaterialSupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MaterialSuppliers.
     */
    data: MaterialSupplierCreateManyInput | MaterialSupplierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialSupplier update
   */
  export type MaterialSupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialSupplier.
     */
    data: XOR<MaterialSupplierUpdateInput, MaterialSupplierUncheckedUpdateInput>
    /**
     * Choose, which MaterialSupplier to update.
     */
    where: MaterialSupplierWhereUniqueInput
  }

  /**
   * MaterialSupplier updateMany
   */
  export type MaterialSupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialSuppliers.
     */
    data: XOR<MaterialSupplierUpdateManyMutationInput, MaterialSupplierUncheckedUpdateManyInput>
    /**
     * Filter which MaterialSuppliers to update
     */
    where?: MaterialSupplierWhereInput
  }

  /**
   * MaterialSupplier upsert
   */
  export type MaterialSupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialSupplier to update in case it exists.
     */
    where: MaterialSupplierWhereUniqueInput
    /**
     * In case the MaterialSupplier found by the `where` argument doesn't exist, create a new MaterialSupplier with this data.
     */
    create: XOR<MaterialSupplierCreateInput, MaterialSupplierUncheckedCreateInput>
    /**
     * In case the MaterialSupplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialSupplierUpdateInput, MaterialSupplierUncheckedUpdateInput>
  }

  /**
   * MaterialSupplier delete
   */
  export type MaterialSupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
    /**
     * Filter which MaterialSupplier to delete.
     */
    where: MaterialSupplierWhereUniqueInput
  }

  /**
   * MaterialSupplier deleteMany
   */
  export type MaterialSupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialSuppliers to delete
     */
    where?: MaterialSupplierWhereInput
  }

  /**
   * MaterialSupplier without action
   */
  export type MaterialSupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialSupplier
     */
    select?: MaterialSupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialSupplierInclude<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    quantity: number | null
    location: string | null
    lastUpdated: Date | null
  }

  export type StockMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    quantity: number | null
    location: string | null
    lastUpdated: Date | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    materialId: number
    quantity: number
    location: number
    lastUpdated: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    quantity?: true
  }

  export type StockSumAggregateInputType = {
    quantity?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    location?: true
    lastUpdated?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    location?: true
    lastUpdated?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    materialId?: true
    quantity?: true
    location?: true
    lastUpdated?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: string
    materialId: string
    quantity: number
    location: string
    lastUpdated: Date
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    location?: boolean
    lastUpdated?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    location?: boolean
    lastUpdated?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectScalar = {
    id?: boolean
    materialId?: boolean
    quantity?: boolean
    location?: boolean
    lastUpdated?: boolean
  }

  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type StockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      quantity: number
      location: string
      lastUpdated: Date
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockCreateManyAndReturnArgs>(args?: SelectSubset<T, StockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
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
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stock model
   */ 
  interface StockFieldRefs {
    readonly id: FieldRef<"Stock", 'String'>
    readonly materialId: FieldRef<"Stock", 'String'>
    readonly quantity: FieldRef<"Stock", 'Float'>
    readonly location: FieldRef<"Stock", 'String'>
    readonly lastUpdated: FieldRef<"Stock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock createManyAndReturn
   */
  export type StockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
  }


  /**
   * Model Usage
   */

  export type AggregateUsage = {
    _count: UsageCountAggregateOutputType | null
    _avg: UsageAvgAggregateOutputType | null
    _sum: UsageSumAggregateOutputType | null
    _min: UsageMinAggregateOutputType | null
    _max: UsageMaxAggregateOutputType | null
  }

  export type UsageAvgAggregateOutputType = {
    quantityUsed: number | null
  }

  export type UsageSumAggregateOutputType = {
    quantityUsed: number | null
  }

  export type UsageMinAggregateOutputType = {
    id: string | null
    materialId: string | null
    quantityUsed: number | null
    dateUsed: Date | null
    batchNumber: string | null
  }

  export type UsageMaxAggregateOutputType = {
    id: string | null
    materialId: string | null
    quantityUsed: number | null
    dateUsed: Date | null
    batchNumber: string | null
  }

  export type UsageCountAggregateOutputType = {
    id: number
    materialId: number
    quantityUsed: number
    dateUsed: number
    batchNumber: number
    _all: number
  }


  export type UsageAvgAggregateInputType = {
    quantityUsed?: true
  }

  export type UsageSumAggregateInputType = {
    quantityUsed?: true
  }

  export type UsageMinAggregateInputType = {
    id?: true
    materialId?: true
    quantityUsed?: true
    dateUsed?: true
    batchNumber?: true
  }

  export type UsageMaxAggregateInputType = {
    id?: true
    materialId?: true
    quantityUsed?: true
    dateUsed?: true
    batchNumber?: true
  }

  export type UsageCountAggregateInputType = {
    id?: true
    materialId?: true
    quantityUsed?: true
    dateUsed?: true
    batchNumber?: true
    _all?: true
  }

  export type UsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usage to aggregate.
     */
    where?: UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usages to fetch.
     */
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usages
    **/
    _count?: true | UsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageMaxAggregateInputType
  }

  export type GetUsageAggregateType<T extends UsageAggregateArgs> = {
        [P in keyof T & keyof AggregateUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsage[P]>
      : GetScalarType<T[P], AggregateUsage[P]>
  }




  export type UsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageWhereInput
    orderBy?: UsageOrderByWithAggregationInput | UsageOrderByWithAggregationInput[]
    by: UsageScalarFieldEnum[] | UsageScalarFieldEnum
    having?: UsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageCountAggregateInputType | true
    _avg?: UsageAvgAggregateInputType
    _sum?: UsageSumAggregateInputType
    _min?: UsageMinAggregateInputType
    _max?: UsageMaxAggregateInputType
  }

  export type UsageGroupByOutputType = {
    id: string
    materialId: string
    quantityUsed: number
    dateUsed: Date
    batchNumber: string | null
    _count: UsageCountAggregateOutputType | null
    _avg: UsageAvgAggregateOutputType | null
    _sum: UsageSumAggregateOutputType | null
    _min: UsageMinAggregateOutputType | null
    _max: UsageMaxAggregateOutputType | null
  }

  type GetUsageGroupByPayload<T extends UsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageGroupByOutputType[P]>
            : GetScalarType<T[P], UsageGroupByOutputType[P]>
        }
      >
    >


  export type UsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantityUsed?: boolean
    dateUsed?: boolean
    batchNumber?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usage"]>

  export type UsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materialId?: boolean
    quantityUsed?: boolean
    dateUsed?: boolean
    batchNumber?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usage"]>

  export type UsageSelectScalar = {
    id?: boolean
    materialId?: boolean
    quantityUsed?: boolean
    dateUsed?: boolean
    batchNumber?: boolean
  }

  export type UsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }
  export type UsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $UsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usage"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materialId: string
      quantityUsed: number
      dateUsed: Date
      batchNumber: string | null
    }, ExtArgs["result"]["usage"]>
    composites: {}
  }

  type UsageGetPayload<S extends boolean | null | undefined | UsageDefaultArgs> = $Result.GetResult<Prisma.$UsagePayload, S>

  type UsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsageCountAggregateInputType | true
    }

  export interface UsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usage'], meta: { name: 'Usage' } }
    /**
     * Find zero or one Usage that matches the filter.
     * @param {UsageFindUniqueArgs} args - Arguments to find a Usage
     * @example
     * // Get one Usage
     * const usage = await prisma.usage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageFindUniqueArgs>(args: SelectSubset<T, UsageFindUniqueArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsageFindUniqueOrThrowArgs} args - Arguments to find a Usage
     * @example
     * // Get one Usage
     * const usage = await prisma.usage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageFindFirstArgs} args - Arguments to find a Usage
     * @example
     * // Get one Usage
     * const usage = await prisma.usage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageFindFirstArgs>(args?: SelectSubset<T, UsageFindFirstArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageFindFirstOrThrowArgs} args - Arguments to find a Usage
     * @example
     * // Get one Usage
     * const usage = await prisma.usage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usages
     * const usages = await prisma.usage.findMany()
     * 
     * // Get first 10 Usages
     * const usages = await prisma.usage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageWithIdOnly = await prisma.usage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageFindManyArgs>(args?: SelectSubset<T, UsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usage.
     * @param {UsageCreateArgs} args - Arguments to create a Usage.
     * @example
     * // Create one Usage
     * const Usage = await prisma.usage.create({
     *   data: {
     *     // ... data to create a Usage
     *   }
     * })
     * 
     */
    create<T extends UsageCreateArgs>(args: SelectSubset<T, UsageCreateArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usages.
     * @param {UsageCreateManyArgs} args - Arguments to create many Usages.
     * @example
     * // Create many Usages
     * const usage = await prisma.usage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageCreateManyArgs>(args?: SelectSubset<T, UsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usages and returns the data saved in the database.
     * @param {UsageCreateManyAndReturnArgs} args - Arguments to create many Usages.
     * @example
     * // Create many Usages
     * const usage = await prisma.usage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usages and only return the `id`
     * const usageWithIdOnly = await prisma.usage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usage.
     * @param {UsageDeleteArgs} args - Arguments to delete one Usage.
     * @example
     * // Delete one Usage
     * const Usage = await prisma.usage.delete({
     *   where: {
     *     // ... filter to delete one Usage
     *   }
     * })
     * 
     */
    delete<T extends UsageDeleteArgs>(args: SelectSubset<T, UsageDeleteArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usage.
     * @param {UsageUpdateArgs} args - Arguments to update one Usage.
     * @example
     * // Update one Usage
     * const usage = await prisma.usage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageUpdateArgs>(args: SelectSubset<T, UsageUpdateArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usages.
     * @param {UsageDeleteManyArgs} args - Arguments to filter Usages to delete.
     * @example
     * // Delete a few Usages
     * const { count } = await prisma.usage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageDeleteManyArgs>(args?: SelectSubset<T, UsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usages
     * const usage = await prisma.usage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageUpdateManyArgs>(args: SelectSubset<T, UsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usage.
     * @param {UsageUpsertArgs} args - Arguments to update or create a Usage.
     * @example
     * // Update or create a Usage
     * const usage = await prisma.usage.upsert({
     *   create: {
     *     // ... data to create a Usage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usage we want to update
     *   }
     * })
     */
    upsert<T extends UsageUpsertArgs>(args: SelectSubset<T, UsageUpsertArgs<ExtArgs>>): Prisma__UsageClient<$Result.GetResult<Prisma.$UsagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageCountArgs} args - Arguments to filter Usages to count.
     * @example
     * // Count the number of Usages
     * const count = await prisma.usage.count({
     *   where: {
     *     // ... the filter for the Usages we want to count
     *   }
     * })
    **/
    count<T extends UsageCountArgs>(
      args?: Subset<T, UsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsageAggregateArgs>(args: Subset<T, UsageAggregateArgs>): Prisma.PrismaPromise<GetUsageAggregateType<T>>

    /**
     * Group by Usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageGroupByArgs} args - Group by arguments.
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
      T extends UsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageGroupByArgs['orderBy'] }
        : { orderBy?: UsageGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usage model
   */
  readonly fields: UsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usage model
   */ 
  interface UsageFieldRefs {
    readonly id: FieldRef<"Usage", 'String'>
    readonly materialId: FieldRef<"Usage", 'String'>
    readonly quantityUsed: FieldRef<"Usage", 'Float'>
    readonly dateUsed: FieldRef<"Usage", 'DateTime'>
    readonly batchNumber: FieldRef<"Usage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usage findUnique
   */
  export type UsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usage to fetch.
     */
    where: UsageWhereUniqueInput
  }

  /**
   * Usage findUniqueOrThrow
   */
  export type UsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usage to fetch.
     */
    where: UsageWhereUniqueInput
  }

  /**
   * Usage findFirst
   */
  export type UsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usage to fetch.
     */
    where?: UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usages to fetch.
     */
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usages.
     */
    cursor?: UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usages.
     */
    distinct?: UsageScalarFieldEnum | UsageScalarFieldEnum[]
  }

  /**
   * Usage findFirstOrThrow
   */
  export type UsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usage to fetch.
     */
    where?: UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usages to fetch.
     */
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usages.
     */
    cursor?: UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usages.
     */
    distinct?: UsageScalarFieldEnum | UsageScalarFieldEnum[]
  }

  /**
   * Usage findMany
   */
  export type UsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter, which Usages to fetch.
     */
    where?: UsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usages to fetch.
     */
    orderBy?: UsageOrderByWithRelationInput | UsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usages.
     */
    cursor?: UsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usages.
     */
    skip?: number
    distinct?: UsageScalarFieldEnum | UsageScalarFieldEnum[]
  }

  /**
   * Usage create
   */
  export type UsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * The data needed to create a Usage.
     */
    data: XOR<UsageCreateInput, UsageUncheckedCreateInput>
  }

  /**
   * Usage createMany
   */
  export type UsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usages.
     */
    data: UsageCreateManyInput | UsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usage createManyAndReturn
   */
  export type UsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usages.
     */
    data: UsageCreateManyInput | UsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usage update
   */
  export type UsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * The data needed to update a Usage.
     */
    data: XOR<UsageUpdateInput, UsageUncheckedUpdateInput>
    /**
     * Choose, which Usage to update.
     */
    where: UsageWhereUniqueInput
  }

  /**
   * Usage updateMany
   */
  export type UsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usages.
     */
    data: XOR<UsageUpdateManyMutationInput, UsageUncheckedUpdateManyInput>
    /**
     * Filter which Usages to update
     */
    where?: UsageWhereInput
  }

  /**
   * Usage upsert
   */
  export type UsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * The filter to search for the Usage to update in case it exists.
     */
    where: UsageWhereUniqueInput
    /**
     * In case the Usage found by the `where` argument doesn't exist, create a new Usage with this data.
     */
    create: XOR<UsageCreateInput, UsageUncheckedCreateInput>
    /**
     * In case the Usage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageUpdateInput, UsageUncheckedUpdateInput>
  }

  /**
   * Usage delete
   */
  export type UsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
    /**
     * Filter which Usage to delete.
     */
    where: UsageWhereUniqueInput
  }

  /**
   * Usage deleteMany
   */
  export type UsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usages to delete
     */
    where?: UsageWhereInput
  }

  /**
   * Usage without action
   */
  export type UsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usage
     */
    select?: UsageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageInclude<ExtArgs> | null
  }


  /**
   * Model FinishedGoods
   */

  export type AggregateFinishedGoods = {
    _count: FinishedGoodsCountAggregateOutputType | null
    _avg: FinishedGoodsAvgAggregateOutputType | null
    _sum: FinishedGoodsSumAggregateOutputType | null
    _min: FinishedGoodsMinAggregateOutputType | null
    _max: FinishedGoodsMaxAggregateOutputType | null
  }

  export type FinishedGoodsAvgAggregateOutputType = {
    pricePerUnit: number | null
  }

  export type FinishedGoodsSumAggregateOutputType = {
    pricePerUnit: number | null
  }

  export type FinishedGoodsMinAggregateOutputType = {
    id: string | null
    batchNumber: string | null
    name: string | null
    description: string | null
    unit: string | null
    pricePerUnit: number | null
    pricePerUnitFormatted: string | null
    color: string | null
    finish: string | null
    createdAt: Date | null
  }

  export type FinishedGoodsMaxAggregateOutputType = {
    id: string | null
    batchNumber: string | null
    name: string | null
    description: string | null
    unit: string | null
    pricePerUnit: number | null
    pricePerUnitFormatted: string | null
    color: string | null
    finish: string | null
    createdAt: Date | null
  }

  export type FinishedGoodsCountAggregateOutputType = {
    id: number
    batchNumber: number
    name: number
    description: number
    unit: number
    pricePerUnit: number
    pricePerUnitFormatted: number
    color: number
    finish: number
    createdAt: number
    _all: number
  }


  export type FinishedGoodsAvgAggregateInputType = {
    pricePerUnit?: true
  }

  export type FinishedGoodsSumAggregateInputType = {
    pricePerUnit?: true
  }

  export type FinishedGoodsMinAggregateInputType = {
    id?: true
    batchNumber?: true
    name?: true
    description?: true
    unit?: true
    pricePerUnit?: true
    pricePerUnitFormatted?: true
    color?: true
    finish?: true
    createdAt?: true
  }

  export type FinishedGoodsMaxAggregateInputType = {
    id?: true
    batchNumber?: true
    name?: true
    description?: true
    unit?: true
    pricePerUnit?: true
    pricePerUnitFormatted?: true
    color?: true
    finish?: true
    createdAt?: true
  }

  export type FinishedGoodsCountAggregateInputType = {
    id?: true
    batchNumber?: true
    name?: true
    description?: true
    unit?: true
    pricePerUnit?: true
    pricePerUnitFormatted?: true
    color?: true
    finish?: true
    createdAt?: true
    _all?: true
  }

  export type FinishedGoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinishedGoods to aggregate.
     */
    where?: FinishedGoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishedGoods to fetch.
     */
    orderBy?: FinishedGoodsOrderByWithRelationInput | FinishedGoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinishedGoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishedGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishedGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinishedGoods
    **/
    _count?: true | FinishedGoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinishedGoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinishedGoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinishedGoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinishedGoodsMaxAggregateInputType
  }

  export type GetFinishedGoodsAggregateType<T extends FinishedGoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateFinishedGoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinishedGoods[P]>
      : GetScalarType<T[P], AggregateFinishedGoods[P]>
  }




  export type FinishedGoodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinishedGoodsWhereInput
    orderBy?: FinishedGoodsOrderByWithAggregationInput | FinishedGoodsOrderByWithAggregationInput[]
    by: FinishedGoodsScalarFieldEnum[] | FinishedGoodsScalarFieldEnum
    having?: FinishedGoodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinishedGoodsCountAggregateInputType | true
    _avg?: FinishedGoodsAvgAggregateInputType
    _sum?: FinishedGoodsSumAggregateInputType
    _min?: FinishedGoodsMinAggregateInputType
    _max?: FinishedGoodsMaxAggregateInputType
  }

  export type FinishedGoodsGroupByOutputType = {
    id: string
    batchNumber: string
    name: string
    description: string | null
    unit: string
    pricePerUnit: number
    pricePerUnitFormatted: string
    color: string | null
    finish: string | null
    createdAt: Date
    _count: FinishedGoodsCountAggregateOutputType | null
    _avg: FinishedGoodsAvgAggregateOutputType | null
    _sum: FinishedGoodsSumAggregateOutputType | null
    _min: FinishedGoodsMinAggregateOutputType | null
    _max: FinishedGoodsMaxAggregateOutputType | null
  }

  type GetFinishedGoodsGroupByPayload<T extends FinishedGoodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinishedGoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinishedGoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinishedGoodsGroupByOutputType[P]>
            : GetScalarType<T[P], FinishedGoodsGroupByOutputType[P]>
        }
      >
    >


  export type FinishedGoodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchNumber?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    pricePerUnit?: boolean
    pricePerUnitFormatted?: boolean
    color?: boolean
    finish?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["finishedGoods"]>

  export type FinishedGoodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchNumber?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    pricePerUnit?: boolean
    pricePerUnitFormatted?: boolean
    color?: boolean
    finish?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["finishedGoods"]>

  export type FinishedGoodsSelectScalar = {
    id?: boolean
    batchNumber?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    pricePerUnit?: boolean
    pricePerUnitFormatted?: boolean
    color?: boolean
    finish?: boolean
    createdAt?: boolean
  }


  export type $FinishedGoodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinishedGoods"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchNumber: string
      name: string
      description: string | null
      unit: string
      pricePerUnit: number
      pricePerUnitFormatted: string
      color: string | null
      finish: string | null
      createdAt: Date
    }, ExtArgs["result"]["finishedGoods"]>
    composites: {}
  }

  type FinishedGoodsGetPayload<S extends boolean | null | undefined | FinishedGoodsDefaultArgs> = $Result.GetResult<Prisma.$FinishedGoodsPayload, S>

  type FinishedGoodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinishedGoodsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FinishedGoodsCountAggregateInputType | true
    }

  export interface FinishedGoodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinishedGoods'], meta: { name: 'FinishedGoods' } }
    /**
     * Find zero or one FinishedGoods that matches the filter.
     * @param {FinishedGoodsFindUniqueArgs} args - Arguments to find a FinishedGoods
     * @example
     * // Get one FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinishedGoodsFindUniqueArgs>(args: SelectSubset<T, FinishedGoodsFindUniqueArgs<ExtArgs>>): Prisma__FinishedGoodsClient<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FinishedGoods that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FinishedGoodsFindUniqueOrThrowArgs} args - Arguments to find a FinishedGoods
     * @example
     * // Get one FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinishedGoodsFindUniqueOrThrowArgs>(args: SelectSubset<T, FinishedGoodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinishedGoodsClient<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FinishedGoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodsFindFirstArgs} args - Arguments to find a FinishedGoods
     * @example
     * // Get one FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinishedGoodsFindFirstArgs>(args?: SelectSubset<T, FinishedGoodsFindFirstArgs<ExtArgs>>): Prisma__FinishedGoodsClient<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FinishedGoods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodsFindFirstOrThrowArgs} args - Arguments to find a FinishedGoods
     * @example
     * // Get one FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinishedGoodsFindFirstOrThrowArgs>(args?: SelectSubset<T, FinishedGoodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinishedGoodsClient<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FinishedGoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.findMany()
     * 
     * // Get first 10 FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finishedGoodsWithIdOnly = await prisma.finishedGoods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinishedGoodsFindManyArgs>(args?: SelectSubset<T, FinishedGoodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FinishedGoods.
     * @param {FinishedGoodsCreateArgs} args - Arguments to create a FinishedGoods.
     * @example
     * // Create one FinishedGoods
     * const FinishedGoods = await prisma.finishedGoods.create({
     *   data: {
     *     // ... data to create a FinishedGoods
     *   }
     * })
     * 
     */
    create<T extends FinishedGoodsCreateArgs>(args: SelectSubset<T, FinishedGoodsCreateArgs<ExtArgs>>): Prisma__FinishedGoodsClient<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FinishedGoods.
     * @param {FinishedGoodsCreateManyArgs} args - Arguments to create many FinishedGoods.
     * @example
     * // Create many FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinishedGoodsCreateManyArgs>(args?: SelectSubset<T, FinishedGoodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinishedGoods and returns the data saved in the database.
     * @param {FinishedGoodsCreateManyAndReturnArgs} args - Arguments to create many FinishedGoods.
     * @example
     * // Create many FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinishedGoods and only return the `id`
     * const finishedGoodsWithIdOnly = await prisma.finishedGoods.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinishedGoodsCreateManyAndReturnArgs>(args?: SelectSubset<T, FinishedGoodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FinishedGoods.
     * @param {FinishedGoodsDeleteArgs} args - Arguments to delete one FinishedGoods.
     * @example
     * // Delete one FinishedGoods
     * const FinishedGoods = await prisma.finishedGoods.delete({
     *   where: {
     *     // ... filter to delete one FinishedGoods
     *   }
     * })
     * 
     */
    delete<T extends FinishedGoodsDeleteArgs>(args: SelectSubset<T, FinishedGoodsDeleteArgs<ExtArgs>>): Prisma__FinishedGoodsClient<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FinishedGoods.
     * @param {FinishedGoodsUpdateArgs} args - Arguments to update one FinishedGoods.
     * @example
     * // Update one FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinishedGoodsUpdateArgs>(args: SelectSubset<T, FinishedGoodsUpdateArgs<ExtArgs>>): Prisma__FinishedGoodsClient<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FinishedGoods.
     * @param {FinishedGoodsDeleteManyArgs} args - Arguments to filter FinishedGoods to delete.
     * @example
     * // Delete a few FinishedGoods
     * const { count } = await prisma.finishedGoods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinishedGoodsDeleteManyArgs>(args?: SelectSubset<T, FinishedGoodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinishedGoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinishedGoodsUpdateManyArgs>(args: SelectSubset<T, FinishedGoodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FinishedGoods.
     * @param {FinishedGoodsUpsertArgs} args - Arguments to update or create a FinishedGoods.
     * @example
     * // Update or create a FinishedGoods
     * const finishedGoods = await prisma.finishedGoods.upsert({
     *   create: {
     *     // ... data to create a FinishedGoods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinishedGoods we want to update
     *   }
     * })
     */
    upsert<T extends FinishedGoodsUpsertArgs>(args: SelectSubset<T, FinishedGoodsUpsertArgs<ExtArgs>>): Prisma__FinishedGoodsClient<$Result.GetResult<Prisma.$FinishedGoodsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FinishedGoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodsCountArgs} args - Arguments to filter FinishedGoods to count.
     * @example
     * // Count the number of FinishedGoods
     * const count = await prisma.finishedGoods.count({
     *   where: {
     *     // ... the filter for the FinishedGoods we want to count
     *   }
     * })
    **/
    count<T extends FinishedGoodsCountArgs>(
      args?: Subset<T, FinishedGoodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinishedGoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinishedGoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinishedGoodsAggregateArgs>(args: Subset<T, FinishedGoodsAggregateArgs>): Prisma.PrismaPromise<GetFinishedGoodsAggregateType<T>>

    /**
     * Group by FinishedGoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodsGroupByArgs} args - Group by arguments.
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
      T extends FinishedGoodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinishedGoodsGroupByArgs['orderBy'] }
        : { orderBy?: FinishedGoodsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinishedGoodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinishedGoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinishedGoods model
   */
  readonly fields: FinishedGoodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinishedGoods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinishedGoodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinishedGoods model
   */ 
  interface FinishedGoodsFieldRefs {
    readonly id: FieldRef<"FinishedGoods", 'String'>
    readonly batchNumber: FieldRef<"FinishedGoods", 'String'>
    readonly name: FieldRef<"FinishedGoods", 'String'>
    readonly description: FieldRef<"FinishedGoods", 'String'>
    readonly unit: FieldRef<"FinishedGoods", 'String'>
    readonly pricePerUnit: FieldRef<"FinishedGoods", 'Float'>
    readonly pricePerUnitFormatted: FieldRef<"FinishedGoods", 'String'>
    readonly color: FieldRef<"FinishedGoods", 'String'>
    readonly finish: FieldRef<"FinishedGoods", 'String'>
    readonly createdAt: FieldRef<"FinishedGoods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinishedGoods findUnique
   */
  export type FinishedGoodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoods to fetch.
     */
    where: FinishedGoodsWhereUniqueInput
  }

  /**
   * FinishedGoods findUniqueOrThrow
   */
  export type FinishedGoodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoods to fetch.
     */
    where: FinishedGoodsWhereUniqueInput
  }

  /**
   * FinishedGoods findFirst
   */
  export type FinishedGoodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoods to fetch.
     */
    where?: FinishedGoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishedGoods to fetch.
     */
    orderBy?: FinishedGoodsOrderByWithRelationInput | FinishedGoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinishedGoods.
     */
    cursor?: FinishedGoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishedGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishedGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinishedGoods.
     */
    distinct?: FinishedGoodsScalarFieldEnum | FinishedGoodsScalarFieldEnum[]
  }

  /**
   * FinishedGoods findFirstOrThrow
   */
  export type FinishedGoodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoods to fetch.
     */
    where?: FinishedGoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishedGoods to fetch.
     */
    orderBy?: FinishedGoodsOrderByWithRelationInput | FinishedGoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinishedGoods.
     */
    cursor?: FinishedGoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishedGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishedGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinishedGoods.
     */
    distinct?: FinishedGoodsScalarFieldEnum | FinishedGoodsScalarFieldEnum[]
  }

  /**
   * FinishedGoods findMany
   */
  export type FinishedGoodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoods to fetch.
     */
    where?: FinishedGoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishedGoods to fetch.
     */
    orderBy?: FinishedGoodsOrderByWithRelationInput | FinishedGoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinishedGoods.
     */
    cursor?: FinishedGoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishedGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishedGoods.
     */
    skip?: number
    distinct?: FinishedGoodsScalarFieldEnum | FinishedGoodsScalarFieldEnum[]
  }

  /**
   * FinishedGoods create
   */
  export type FinishedGoodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * The data needed to create a FinishedGoods.
     */
    data: XOR<FinishedGoodsCreateInput, FinishedGoodsUncheckedCreateInput>
  }

  /**
   * FinishedGoods createMany
   */
  export type FinishedGoodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinishedGoods.
     */
    data: FinishedGoodsCreateManyInput | FinishedGoodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinishedGoods createManyAndReturn
   */
  export type FinishedGoodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FinishedGoods.
     */
    data: FinishedGoodsCreateManyInput | FinishedGoodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinishedGoods update
   */
  export type FinishedGoodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * The data needed to update a FinishedGoods.
     */
    data: XOR<FinishedGoodsUpdateInput, FinishedGoodsUncheckedUpdateInput>
    /**
     * Choose, which FinishedGoods to update.
     */
    where: FinishedGoodsWhereUniqueInput
  }

  /**
   * FinishedGoods updateMany
   */
  export type FinishedGoodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinishedGoods.
     */
    data: XOR<FinishedGoodsUpdateManyMutationInput, FinishedGoodsUncheckedUpdateManyInput>
    /**
     * Filter which FinishedGoods to update
     */
    where?: FinishedGoodsWhereInput
  }

  /**
   * FinishedGoods upsert
   */
  export type FinishedGoodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * The filter to search for the FinishedGoods to update in case it exists.
     */
    where: FinishedGoodsWhereUniqueInput
    /**
     * In case the FinishedGoods found by the `where` argument doesn't exist, create a new FinishedGoods with this data.
     */
    create: XOR<FinishedGoodsCreateInput, FinishedGoodsUncheckedCreateInput>
    /**
     * In case the FinishedGoods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinishedGoodsUpdateInput, FinishedGoodsUncheckedUpdateInput>
  }

  /**
   * FinishedGoods delete
   */
  export type FinishedGoodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
    /**
     * Filter which FinishedGoods to delete.
     */
    where: FinishedGoodsWhereUniqueInput
  }

  /**
   * FinishedGoods deleteMany
   */
  export type FinishedGoodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinishedGoods to delete
     */
    where?: FinishedGoodsWhereInput
  }

  /**
   * FinishedGoods without action
   */
  export type FinishedGoodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoods
     */
    select?: FinishedGoodsSelect<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
  }


  /**
   * Model FinishedGoodStock
   */

  export type AggregateFinishedGoodStock = {
    _count: FinishedGoodStockCountAggregateOutputType | null
    _avg: FinishedGoodStockAvgAggregateOutputType | null
    _sum: FinishedGoodStockSumAggregateOutputType | null
    _min: FinishedGoodStockMinAggregateOutputType | null
    _max: FinishedGoodStockMaxAggregateOutputType | null
  }

  export type FinishedGoodStockAvgAggregateOutputType = {
    quantity: number | null
  }

  export type FinishedGoodStockSumAggregateOutputType = {
    quantity: number | null
  }

  export type FinishedGoodStockMinAggregateOutputType = {
    id: string | null
    finishedGoodsId: string | null
    quantity: number | null
    location: string | null
    lastUpdated: Date | null
  }

  export type FinishedGoodStockMaxAggregateOutputType = {
    id: string | null
    finishedGoodsId: string | null
    quantity: number | null
    location: string | null
    lastUpdated: Date | null
  }

  export type FinishedGoodStockCountAggregateOutputType = {
    id: number
    finishedGoodsId: number
    quantity: number
    location: number
    lastUpdated: number
    _all: number
  }


  export type FinishedGoodStockAvgAggregateInputType = {
    quantity?: true
  }

  export type FinishedGoodStockSumAggregateInputType = {
    quantity?: true
  }

  export type FinishedGoodStockMinAggregateInputType = {
    id?: true
    finishedGoodsId?: true
    quantity?: true
    location?: true
    lastUpdated?: true
  }

  export type FinishedGoodStockMaxAggregateInputType = {
    id?: true
    finishedGoodsId?: true
    quantity?: true
    location?: true
    lastUpdated?: true
  }

  export type FinishedGoodStockCountAggregateInputType = {
    id?: true
    finishedGoodsId?: true
    quantity?: true
    location?: true
    lastUpdated?: true
    _all?: true
  }

  export type FinishedGoodStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinishedGoodStock to aggregate.
     */
    where?: FinishedGoodStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishedGoodStocks to fetch.
     */
    orderBy?: FinishedGoodStockOrderByWithRelationInput | FinishedGoodStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinishedGoodStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishedGoodStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishedGoodStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinishedGoodStocks
    **/
    _count?: true | FinishedGoodStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinishedGoodStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinishedGoodStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinishedGoodStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinishedGoodStockMaxAggregateInputType
  }

  export type GetFinishedGoodStockAggregateType<T extends FinishedGoodStockAggregateArgs> = {
        [P in keyof T & keyof AggregateFinishedGoodStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinishedGoodStock[P]>
      : GetScalarType<T[P], AggregateFinishedGoodStock[P]>
  }




  export type FinishedGoodStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinishedGoodStockWhereInput
    orderBy?: FinishedGoodStockOrderByWithAggregationInput | FinishedGoodStockOrderByWithAggregationInput[]
    by: FinishedGoodStockScalarFieldEnum[] | FinishedGoodStockScalarFieldEnum
    having?: FinishedGoodStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinishedGoodStockCountAggregateInputType | true
    _avg?: FinishedGoodStockAvgAggregateInputType
    _sum?: FinishedGoodStockSumAggregateInputType
    _min?: FinishedGoodStockMinAggregateInputType
    _max?: FinishedGoodStockMaxAggregateInputType
  }

  export type FinishedGoodStockGroupByOutputType = {
    id: string
    finishedGoodsId: string
    quantity: number
    location: string
    lastUpdated: Date
    _count: FinishedGoodStockCountAggregateOutputType | null
    _avg: FinishedGoodStockAvgAggregateOutputType | null
    _sum: FinishedGoodStockSumAggregateOutputType | null
    _min: FinishedGoodStockMinAggregateOutputType | null
    _max: FinishedGoodStockMaxAggregateOutputType | null
  }

  type GetFinishedGoodStockGroupByPayload<T extends FinishedGoodStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinishedGoodStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinishedGoodStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinishedGoodStockGroupByOutputType[P]>
            : GetScalarType<T[P], FinishedGoodStockGroupByOutputType[P]>
        }
      >
    >


  export type FinishedGoodStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finishedGoodsId?: boolean
    quantity?: boolean
    location?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["finishedGoodStock"]>

  export type FinishedGoodStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finishedGoodsId?: boolean
    quantity?: boolean
    location?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["finishedGoodStock"]>

  export type FinishedGoodStockSelectScalar = {
    id?: boolean
    finishedGoodsId?: boolean
    quantity?: boolean
    location?: boolean
    lastUpdated?: boolean
  }


  export type $FinishedGoodStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinishedGoodStock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      finishedGoodsId: string
      quantity: number
      location: string
      lastUpdated: Date
    }, ExtArgs["result"]["finishedGoodStock"]>
    composites: {}
  }

  type FinishedGoodStockGetPayload<S extends boolean | null | undefined | FinishedGoodStockDefaultArgs> = $Result.GetResult<Prisma.$FinishedGoodStockPayload, S>

  type FinishedGoodStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinishedGoodStockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FinishedGoodStockCountAggregateInputType | true
    }

  export interface FinishedGoodStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinishedGoodStock'], meta: { name: 'FinishedGoodStock' } }
    /**
     * Find zero or one FinishedGoodStock that matches the filter.
     * @param {FinishedGoodStockFindUniqueArgs} args - Arguments to find a FinishedGoodStock
     * @example
     * // Get one FinishedGoodStock
     * const finishedGoodStock = await prisma.finishedGoodStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinishedGoodStockFindUniqueArgs>(args: SelectSubset<T, FinishedGoodStockFindUniqueArgs<ExtArgs>>): Prisma__FinishedGoodStockClient<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FinishedGoodStock that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FinishedGoodStockFindUniqueOrThrowArgs} args - Arguments to find a FinishedGoodStock
     * @example
     * // Get one FinishedGoodStock
     * const finishedGoodStock = await prisma.finishedGoodStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinishedGoodStockFindUniqueOrThrowArgs>(args: SelectSubset<T, FinishedGoodStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinishedGoodStockClient<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FinishedGoodStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodStockFindFirstArgs} args - Arguments to find a FinishedGoodStock
     * @example
     * // Get one FinishedGoodStock
     * const finishedGoodStock = await prisma.finishedGoodStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinishedGoodStockFindFirstArgs>(args?: SelectSubset<T, FinishedGoodStockFindFirstArgs<ExtArgs>>): Prisma__FinishedGoodStockClient<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FinishedGoodStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodStockFindFirstOrThrowArgs} args - Arguments to find a FinishedGoodStock
     * @example
     * // Get one FinishedGoodStock
     * const finishedGoodStock = await prisma.finishedGoodStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinishedGoodStockFindFirstOrThrowArgs>(args?: SelectSubset<T, FinishedGoodStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinishedGoodStockClient<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FinishedGoodStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinishedGoodStocks
     * const finishedGoodStocks = await prisma.finishedGoodStock.findMany()
     * 
     * // Get first 10 FinishedGoodStocks
     * const finishedGoodStocks = await prisma.finishedGoodStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finishedGoodStockWithIdOnly = await prisma.finishedGoodStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinishedGoodStockFindManyArgs>(args?: SelectSubset<T, FinishedGoodStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FinishedGoodStock.
     * @param {FinishedGoodStockCreateArgs} args - Arguments to create a FinishedGoodStock.
     * @example
     * // Create one FinishedGoodStock
     * const FinishedGoodStock = await prisma.finishedGoodStock.create({
     *   data: {
     *     // ... data to create a FinishedGoodStock
     *   }
     * })
     * 
     */
    create<T extends FinishedGoodStockCreateArgs>(args: SelectSubset<T, FinishedGoodStockCreateArgs<ExtArgs>>): Prisma__FinishedGoodStockClient<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FinishedGoodStocks.
     * @param {FinishedGoodStockCreateManyArgs} args - Arguments to create many FinishedGoodStocks.
     * @example
     * // Create many FinishedGoodStocks
     * const finishedGoodStock = await prisma.finishedGoodStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinishedGoodStockCreateManyArgs>(args?: SelectSubset<T, FinishedGoodStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinishedGoodStocks and returns the data saved in the database.
     * @param {FinishedGoodStockCreateManyAndReturnArgs} args - Arguments to create many FinishedGoodStocks.
     * @example
     * // Create many FinishedGoodStocks
     * const finishedGoodStock = await prisma.finishedGoodStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinishedGoodStocks and only return the `id`
     * const finishedGoodStockWithIdOnly = await prisma.finishedGoodStock.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinishedGoodStockCreateManyAndReturnArgs>(args?: SelectSubset<T, FinishedGoodStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FinishedGoodStock.
     * @param {FinishedGoodStockDeleteArgs} args - Arguments to delete one FinishedGoodStock.
     * @example
     * // Delete one FinishedGoodStock
     * const FinishedGoodStock = await prisma.finishedGoodStock.delete({
     *   where: {
     *     // ... filter to delete one FinishedGoodStock
     *   }
     * })
     * 
     */
    delete<T extends FinishedGoodStockDeleteArgs>(args: SelectSubset<T, FinishedGoodStockDeleteArgs<ExtArgs>>): Prisma__FinishedGoodStockClient<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FinishedGoodStock.
     * @param {FinishedGoodStockUpdateArgs} args - Arguments to update one FinishedGoodStock.
     * @example
     * // Update one FinishedGoodStock
     * const finishedGoodStock = await prisma.finishedGoodStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinishedGoodStockUpdateArgs>(args: SelectSubset<T, FinishedGoodStockUpdateArgs<ExtArgs>>): Prisma__FinishedGoodStockClient<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FinishedGoodStocks.
     * @param {FinishedGoodStockDeleteManyArgs} args - Arguments to filter FinishedGoodStocks to delete.
     * @example
     * // Delete a few FinishedGoodStocks
     * const { count } = await prisma.finishedGoodStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinishedGoodStockDeleteManyArgs>(args?: SelectSubset<T, FinishedGoodStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinishedGoodStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinishedGoodStocks
     * const finishedGoodStock = await prisma.finishedGoodStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinishedGoodStockUpdateManyArgs>(args: SelectSubset<T, FinishedGoodStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FinishedGoodStock.
     * @param {FinishedGoodStockUpsertArgs} args - Arguments to update or create a FinishedGoodStock.
     * @example
     * // Update or create a FinishedGoodStock
     * const finishedGoodStock = await prisma.finishedGoodStock.upsert({
     *   create: {
     *     // ... data to create a FinishedGoodStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinishedGoodStock we want to update
     *   }
     * })
     */
    upsert<T extends FinishedGoodStockUpsertArgs>(args: SelectSubset<T, FinishedGoodStockUpsertArgs<ExtArgs>>): Prisma__FinishedGoodStockClient<$Result.GetResult<Prisma.$FinishedGoodStockPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FinishedGoodStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodStockCountArgs} args - Arguments to filter FinishedGoodStocks to count.
     * @example
     * // Count the number of FinishedGoodStocks
     * const count = await prisma.finishedGoodStock.count({
     *   where: {
     *     // ... the filter for the FinishedGoodStocks we want to count
     *   }
     * })
    **/
    count<T extends FinishedGoodStockCountArgs>(
      args?: Subset<T, FinishedGoodStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinishedGoodStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinishedGoodStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinishedGoodStockAggregateArgs>(args: Subset<T, FinishedGoodStockAggregateArgs>): Prisma.PrismaPromise<GetFinishedGoodStockAggregateType<T>>

    /**
     * Group by FinishedGoodStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishedGoodStockGroupByArgs} args - Group by arguments.
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
      T extends FinishedGoodStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinishedGoodStockGroupByArgs['orderBy'] }
        : { orderBy?: FinishedGoodStockGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinishedGoodStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinishedGoodStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinishedGoodStock model
   */
  readonly fields: FinishedGoodStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinishedGoodStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinishedGoodStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinishedGoodStock model
   */ 
  interface FinishedGoodStockFieldRefs {
    readonly id: FieldRef<"FinishedGoodStock", 'String'>
    readonly finishedGoodsId: FieldRef<"FinishedGoodStock", 'String'>
    readonly quantity: FieldRef<"FinishedGoodStock", 'Float'>
    readonly location: FieldRef<"FinishedGoodStock", 'String'>
    readonly lastUpdated: FieldRef<"FinishedGoodStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinishedGoodStock findUnique
   */
  export type FinishedGoodStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoodStock to fetch.
     */
    where: FinishedGoodStockWhereUniqueInput
  }

  /**
   * FinishedGoodStock findUniqueOrThrow
   */
  export type FinishedGoodStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoodStock to fetch.
     */
    where: FinishedGoodStockWhereUniqueInput
  }

  /**
   * FinishedGoodStock findFirst
   */
  export type FinishedGoodStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoodStock to fetch.
     */
    where?: FinishedGoodStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishedGoodStocks to fetch.
     */
    orderBy?: FinishedGoodStockOrderByWithRelationInput | FinishedGoodStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinishedGoodStocks.
     */
    cursor?: FinishedGoodStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishedGoodStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishedGoodStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinishedGoodStocks.
     */
    distinct?: FinishedGoodStockScalarFieldEnum | FinishedGoodStockScalarFieldEnum[]
  }

  /**
   * FinishedGoodStock findFirstOrThrow
   */
  export type FinishedGoodStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoodStock to fetch.
     */
    where?: FinishedGoodStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishedGoodStocks to fetch.
     */
    orderBy?: FinishedGoodStockOrderByWithRelationInput | FinishedGoodStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinishedGoodStocks.
     */
    cursor?: FinishedGoodStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishedGoodStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishedGoodStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinishedGoodStocks.
     */
    distinct?: FinishedGoodStockScalarFieldEnum | FinishedGoodStockScalarFieldEnum[]
  }

  /**
   * FinishedGoodStock findMany
   */
  export type FinishedGoodStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * Filter, which FinishedGoodStocks to fetch.
     */
    where?: FinishedGoodStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishedGoodStocks to fetch.
     */
    orderBy?: FinishedGoodStockOrderByWithRelationInput | FinishedGoodStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinishedGoodStocks.
     */
    cursor?: FinishedGoodStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishedGoodStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishedGoodStocks.
     */
    skip?: number
    distinct?: FinishedGoodStockScalarFieldEnum | FinishedGoodStockScalarFieldEnum[]
  }

  /**
   * FinishedGoodStock create
   */
  export type FinishedGoodStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * The data needed to create a FinishedGoodStock.
     */
    data: XOR<FinishedGoodStockCreateInput, FinishedGoodStockUncheckedCreateInput>
  }

  /**
   * FinishedGoodStock createMany
   */
  export type FinishedGoodStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinishedGoodStocks.
     */
    data: FinishedGoodStockCreateManyInput | FinishedGoodStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinishedGoodStock createManyAndReturn
   */
  export type FinishedGoodStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FinishedGoodStocks.
     */
    data: FinishedGoodStockCreateManyInput | FinishedGoodStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinishedGoodStock update
   */
  export type FinishedGoodStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * The data needed to update a FinishedGoodStock.
     */
    data: XOR<FinishedGoodStockUpdateInput, FinishedGoodStockUncheckedUpdateInput>
    /**
     * Choose, which FinishedGoodStock to update.
     */
    where: FinishedGoodStockWhereUniqueInput
  }

  /**
   * FinishedGoodStock updateMany
   */
  export type FinishedGoodStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinishedGoodStocks.
     */
    data: XOR<FinishedGoodStockUpdateManyMutationInput, FinishedGoodStockUncheckedUpdateManyInput>
    /**
     * Filter which FinishedGoodStocks to update
     */
    where?: FinishedGoodStockWhereInput
  }

  /**
   * FinishedGoodStock upsert
   */
  export type FinishedGoodStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * The filter to search for the FinishedGoodStock to update in case it exists.
     */
    where: FinishedGoodStockWhereUniqueInput
    /**
     * In case the FinishedGoodStock found by the `where` argument doesn't exist, create a new FinishedGoodStock with this data.
     */
    create: XOR<FinishedGoodStockCreateInput, FinishedGoodStockUncheckedCreateInput>
    /**
     * In case the FinishedGoodStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinishedGoodStockUpdateInput, FinishedGoodStockUncheckedUpdateInput>
  }

  /**
   * FinishedGoodStock delete
   */
  export type FinishedGoodStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
    /**
     * Filter which FinishedGoodStock to delete.
     */
    where: FinishedGoodStockWhereUniqueInput
  }

  /**
   * FinishedGoodStock deleteMany
   */
  export type FinishedGoodStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinishedGoodStocks to delete
     */
    where?: FinishedGoodStockWhereInput
  }

  /**
   * FinishedGoodStock without action
   */
  export type FinishedGoodStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishedGoodStock
     */
    select?: FinishedGoodStockSelect<ExtArgs> | null
  }


  /**
   * Model Quotation
   */

  export type AggregateQuotation = {
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  export type QuotationAvgAggregateOutputType = {
    totalAmount: number | null
    discount: number | null
    vat: number | null
  }

  export type QuotationSumAggregateOutputType = {
    totalAmount: number | null
    discount: number | null
    vat: number | null
  }

  export type QuotationMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    date: Date | null
    totalAmount: number | null
    discount: number | null
    vat: number | null
    status: string | null
  }

  export type QuotationMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    date: Date | null
    totalAmount: number | null
    discount: number | null
    vat: number | null
    status: string | null
  }

  export type QuotationCountAggregateOutputType = {
    id: number
    customerName: number
    date: number
    totalAmount: number
    discount: number
    vat: number
    status: number
    _all: number
  }


  export type QuotationAvgAggregateInputType = {
    totalAmount?: true
    discount?: true
    vat?: true
  }

  export type QuotationSumAggregateInputType = {
    totalAmount?: true
    discount?: true
    vat?: true
  }

  export type QuotationMinAggregateInputType = {
    id?: true
    customerName?: true
    date?: true
    totalAmount?: true
    discount?: true
    vat?: true
    status?: true
  }

  export type QuotationMaxAggregateInputType = {
    id?: true
    customerName?: true
    date?: true
    totalAmount?: true
    discount?: true
    vat?: true
    status?: true
  }

  export type QuotationCountAggregateInputType = {
    id?: true
    customerName?: true
    date?: true
    totalAmount?: true
    discount?: true
    vat?: true
    status?: true
    _all?: true
  }

  export type QuotationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotation to aggregate.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotations
    **/
    _count?: true | QuotationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationMaxAggregateInputType
  }

  export type GetQuotationAggregateType<T extends QuotationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotation[P]>
      : GetScalarType<T[P], AggregateQuotation[P]>
  }




  export type QuotationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationWhereInput
    orderBy?: QuotationOrderByWithAggregationInput | QuotationOrderByWithAggregationInput[]
    by: QuotationScalarFieldEnum[] | QuotationScalarFieldEnum
    having?: QuotationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationCountAggregateInputType | true
    _avg?: QuotationAvgAggregateInputType
    _sum?: QuotationSumAggregateInputType
    _min?: QuotationMinAggregateInputType
    _max?: QuotationMaxAggregateInputType
  }

  export type QuotationGroupByOutputType = {
    id: string
    customerName: string
    date: Date
    totalAmount: number
    discount: number | null
    vat: number | null
    status: string
    _count: QuotationCountAggregateOutputType | null
    _avg: QuotationAvgAggregateOutputType | null
    _sum: QuotationSumAggregateOutputType | null
    _min: QuotationMinAggregateOutputType | null
    _max: QuotationMaxAggregateOutputType | null
  }

  type GetQuotationGroupByPayload<T extends QuotationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationGroupByOutputType[P]>
        }
      >
    >


  export type QuotationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    discount?: boolean
    vat?: boolean
    status?: boolean
    items?: boolean | Quotation$itemsArgs<ExtArgs>
    orders?: boolean | Quotation$ordersArgs<ExtArgs>
    _count?: boolean | QuotationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    discount?: boolean
    vat?: boolean
    status?: boolean
  }, ExtArgs["result"]["quotation"]>

  export type QuotationSelectScalar = {
    id?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    discount?: boolean
    vat?: boolean
    status?: boolean
  }

  export type QuotationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Quotation$itemsArgs<ExtArgs>
    orders?: boolean | Quotation$ordersArgs<ExtArgs>
    _count?: boolean | QuotationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuotationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuotationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quotation"
    objects: {
      items: Prisma.$QuotationItemPayload<ExtArgs>[]
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      date: Date
      totalAmount: number
      discount: number | null
      vat: number | null
      status: string
    }, ExtArgs["result"]["quotation"]>
    composites: {}
  }

  type QuotationGetPayload<S extends boolean | null | undefined | QuotationDefaultArgs> = $Result.GetResult<Prisma.$QuotationPayload, S>

  type QuotationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuotationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuotationCountAggregateInputType | true
    }

  export interface QuotationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quotation'], meta: { name: 'Quotation' } }
    /**
     * Find zero or one Quotation that matches the filter.
     * @param {QuotationFindUniqueArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationFindUniqueArgs>(args: SelectSubset<T, QuotationFindUniqueArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Quotation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuotationFindUniqueOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Quotation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationFindFirstArgs>(args?: SelectSubset<T, QuotationFindFirstArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Quotation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindFirstOrThrowArgs} args - Arguments to find a Quotation
     * @example
     * // Get one Quotation
     * const quotation = await prisma.quotation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Quotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotations
     * const quotations = await prisma.quotation.findMany()
     * 
     * // Get first 10 Quotations
     * const quotations = await prisma.quotation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationWithIdOnly = await prisma.quotation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationFindManyArgs>(args?: SelectSubset<T, QuotationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Quotation.
     * @param {QuotationCreateArgs} args - Arguments to create a Quotation.
     * @example
     * // Create one Quotation
     * const Quotation = await prisma.quotation.create({
     *   data: {
     *     // ... data to create a Quotation
     *   }
     * })
     * 
     */
    create<T extends QuotationCreateArgs>(args: SelectSubset<T, QuotationCreateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Quotations.
     * @param {QuotationCreateManyArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationCreateManyArgs>(args?: SelectSubset<T, QuotationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quotations and returns the data saved in the database.
     * @param {QuotationCreateManyAndReturnArgs} args - Arguments to create many Quotations.
     * @example
     * // Create many Quotations
     * const quotation = await prisma.quotation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quotations and only return the `id`
     * const quotationWithIdOnly = await prisma.quotation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Quotation.
     * @param {QuotationDeleteArgs} args - Arguments to delete one Quotation.
     * @example
     * // Delete one Quotation
     * const Quotation = await prisma.quotation.delete({
     *   where: {
     *     // ... filter to delete one Quotation
     *   }
     * })
     * 
     */
    delete<T extends QuotationDeleteArgs>(args: SelectSubset<T, QuotationDeleteArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Quotation.
     * @param {QuotationUpdateArgs} args - Arguments to update one Quotation.
     * @example
     * // Update one Quotation
     * const quotation = await prisma.quotation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationUpdateArgs>(args: SelectSubset<T, QuotationUpdateArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Quotations.
     * @param {QuotationDeleteManyArgs} args - Arguments to filter Quotations to delete.
     * @example
     * // Delete a few Quotations
     * const { count } = await prisma.quotation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationDeleteManyArgs>(args?: SelectSubset<T, QuotationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotations
     * const quotation = await prisma.quotation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationUpdateManyArgs>(args: SelectSubset<T, QuotationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quotation.
     * @param {QuotationUpsertArgs} args - Arguments to update or create a Quotation.
     * @example
     * // Update or create a Quotation
     * const quotation = await prisma.quotation.upsert({
     *   create: {
     *     // ... data to create a Quotation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quotation we want to update
     *   }
     * })
     */
    upsert<T extends QuotationUpsertArgs>(args: SelectSubset<T, QuotationUpsertArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Quotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCountArgs} args - Arguments to filter Quotations to count.
     * @example
     * // Count the number of Quotations
     * const count = await prisma.quotation.count({
     *   where: {
     *     // ... the filter for the Quotations we want to count
     *   }
     * })
    **/
    count<T extends QuotationCountArgs>(
      args?: Subset<T, QuotationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationAggregateArgs>(args: Subset<T, QuotationAggregateArgs>): Prisma.PrismaPromise<GetQuotationAggregateType<T>>

    /**
     * Group by Quotation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationGroupByArgs} args - Group by arguments.
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
      T extends QuotationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationGroupByArgs['orderBy'] }
        : { orderBy?: QuotationGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuotationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quotation model
   */
  readonly fields: QuotationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quotation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Quotation$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Quotation$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Quotation$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Quotation$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quotation model
   */ 
  interface QuotationFieldRefs {
    readonly id: FieldRef<"Quotation", 'String'>
    readonly customerName: FieldRef<"Quotation", 'String'>
    readonly date: FieldRef<"Quotation", 'DateTime'>
    readonly totalAmount: FieldRef<"Quotation", 'Float'>
    readonly discount: FieldRef<"Quotation", 'Float'>
    readonly vat: FieldRef<"Quotation", 'Float'>
    readonly status: FieldRef<"Quotation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quotation findUnique
   */
  export type QuotationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findUniqueOrThrow
   */
  export type QuotationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation findFirst
   */
  export type QuotationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findFirstOrThrow
   */
  export type QuotationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotation to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotations.
     */
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation findMany
   */
  export type QuotationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter, which Quotations to fetch.
     */
    where?: QuotationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotations to fetch.
     */
    orderBy?: QuotationOrderByWithRelationInput | QuotationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotations.
     */
    cursor?: QuotationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotations.
     */
    skip?: number
    distinct?: QuotationScalarFieldEnum | QuotationScalarFieldEnum[]
  }

  /**
   * Quotation create
   */
  export type QuotationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The data needed to create a Quotation.
     */
    data: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
  }

  /**
   * Quotation createMany
   */
  export type QuotationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quotation createManyAndReturn
   */
  export type QuotationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Quotations.
     */
    data: QuotationCreateManyInput | QuotationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quotation update
   */
  export type QuotationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The data needed to update a Quotation.
     */
    data: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
    /**
     * Choose, which Quotation to update.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation updateMany
   */
  export type QuotationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotations.
     */
    data: XOR<QuotationUpdateManyMutationInput, QuotationUncheckedUpdateManyInput>
    /**
     * Filter which Quotations to update
     */
    where?: QuotationWhereInput
  }

  /**
   * Quotation upsert
   */
  export type QuotationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * The filter to search for the Quotation to update in case it exists.
     */
    where: QuotationWhereUniqueInput
    /**
     * In case the Quotation found by the `where` argument doesn't exist, create a new Quotation with this data.
     */
    create: XOR<QuotationCreateInput, QuotationUncheckedCreateInput>
    /**
     * In case the Quotation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationUpdateInput, QuotationUncheckedUpdateInput>
  }

  /**
   * Quotation delete
   */
  export type QuotationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
    /**
     * Filter which Quotation to delete.
     */
    where: QuotationWhereUniqueInput
  }

  /**
   * Quotation deleteMany
   */
  export type QuotationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotations to delete
     */
    where?: QuotationWhereInput
  }

  /**
   * Quotation.items
   */
  export type Quotation$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    where?: QuotationItemWhereInput
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    cursor?: QuotationItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * Quotation.orders
   */
  export type Quotation$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Quotation without action
   */
  export type QuotationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quotation
     */
    select?: QuotationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationInclude<ExtArgs> | null
  }


  /**
   * Model QuotationItem
   */

  export type AggregateQuotationItem = {
    _count: QuotationItemCountAggregateOutputType | null
    _avg: QuotationItemAvgAggregateOutputType | null
    _sum: QuotationItemSumAggregateOutputType | null
    _min: QuotationItemMinAggregateOutputType | null
    _max: QuotationItemMaxAggregateOutputType | null
  }

  export type QuotationItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type QuotationItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type QuotationItemMinAggregateOutputType = {
    id: string | null
    quotationId: string | null
    finishedGoodId: string | null
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type QuotationItemMaxAggregateOutputType = {
    id: string | null
    quotationId: string | null
    finishedGoodId: string | null
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type QuotationItemCountAggregateOutputType = {
    id: number
    quotationId: number
    finishedGoodId: number
    quantity: number
    unitPrice: number
    totalPrice: number
    _all: number
  }


  export type QuotationItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type QuotationItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type QuotationItemMinAggregateInputType = {
    id?: true
    quotationId?: true
    finishedGoodId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type QuotationItemMaxAggregateInputType = {
    id?: true
    quotationId?: true
    finishedGoodId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type QuotationItemCountAggregateInputType = {
    id?: true
    quotationId?: true
    finishedGoodId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    _all?: true
  }

  export type QuotationItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationItem to aggregate.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuotationItems
    **/
    _count?: true | QuotationItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuotationItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuotationItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationItemMaxAggregateInputType
  }

  export type GetQuotationItemAggregateType<T extends QuotationItemAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotationItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotationItem[P]>
      : GetScalarType<T[P], AggregateQuotationItem[P]>
  }




  export type QuotationItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationItemWhereInput
    orderBy?: QuotationItemOrderByWithAggregationInput | QuotationItemOrderByWithAggregationInput[]
    by: QuotationItemScalarFieldEnum[] | QuotationItemScalarFieldEnum
    having?: QuotationItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationItemCountAggregateInputType | true
    _avg?: QuotationItemAvgAggregateInputType
    _sum?: QuotationItemSumAggregateInputType
    _min?: QuotationItemMinAggregateInputType
    _max?: QuotationItemMaxAggregateInputType
  }

  export type QuotationItemGroupByOutputType = {
    id: string
    quotationId: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
    _count: QuotationItemCountAggregateOutputType | null
    _avg: QuotationItemAvgAggregateOutputType | null
    _sum: QuotationItemSumAggregateOutputType | null
    _min: QuotationItemMinAggregateOutputType | null
    _max: QuotationItemMaxAggregateOutputType | null
  }

  type GetQuotationItemGroupByPayload<T extends QuotationItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationItemGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationItemGroupByOutputType[P]>
        }
      >
    >


  export type QuotationItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    finishedGoodId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationItem"]>

  export type QuotationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    finishedGoodId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationItem"]>

  export type QuotationItemSelectScalar = {
    id?: boolean
    quotationId?: boolean
    finishedGoodId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
  }

  export type QuotationItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }
  export type QuotationItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }

  export type $QuotationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuotationItem"
    objects: {
      quotation: Prisma.$QuotationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quotationId: string
      finishedGoodId: string
      quantity: number
      unitPrice: number
      totalPrice: number
    }, ExtArgs["result"]["quotationItem"]>
    composites: {}
  }

  type QuotationItemGetPayload<S extends boolean | null | undefined | QuotationItemDefaultArgs> = $Result.GetResult<Prisma.$QuotationItemPayload, S>

  type QuotationItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuotationItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuotationItemCountAggregateInputType | true
    }

  export interface QuotationItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuotationItem'], meta: { name: 'QuotationItem' } }
    /**
     * Find zero or one QuotationItem that matches the filter.
     * @param {QuotationItemFindUniqueArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationItemFindUniqueArgs>(args: SelectSubset<T, QuotationItemFindUniqueArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuotationItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuotationItemFindUniqueOrThrowArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationItemFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuotationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindFirstArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationItemFindFirstArgs>(args?: SelectSubset<T, QuotationItemFindFirstArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuotationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindFirstOrThrowArgs} args - Arguments to find a QuotationItem
     * @example
     * // Get one QuotationItem
     * const quotationItem = await prisma.quotationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationItemFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuotationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuotationItems
     * const quotationItems = await prisma.quotationItem.findMany()
     * 
     * // Get first 10 QuotationItems
     * const quotationItems = await prisma.quotationItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationItemWithIdOnly = await prisma.quotationItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationItemFindManyArgs>(args?: SelectSubset<T, QuotationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuotationItem.
     * @param {QuotationItemCreateArgs} args - Arguments to create a QuotationItem.
     * @example
     * // Create one QuotationItem
     * const QuotationItem = await prisma.quotationItem.create({
     *   data: {
     *     // ... data to create a QuotationItem
     *   }
     * })
     * 
     */
    create<T extends QuotationItemCreateArgs>(args: SelectSubset<T, QuotationItemCreateArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuotationItems.
     * @param {QuotationItemCreateManyArgs} args - Arguments to create many QuotationItems.
     * @example
     * // Create many QuotationItems
     * const quotationItem = await prisma.quotationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationItemCreateManyArgs>(args?: SelectSubset<T, QuotationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuotationItems and returns the data saved in the database.
     * @param {QuotationItemCreateManyAndReturnArgs} args - Arguments to create many QuotationItems.
     * @example
     * // Create many QuotationItems
     * const quotationItem = await prisma.quotationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuotationItems and only return the `id`
     * const quotationItemWithIdOnly = await prisma.quotationItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationItemCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuotationItem.
     * @param {QuotationItemDeleteArgs} args - Arguments to delete one QuotationItem.
     * @example
     * // Delete one QuotationItem
     * const QuotationItem = await prisma.quotationItem.delete({
     *   where: {
     *     // ... filter to delete one QuotationItem
     *   }
     * })
     * 
     */
    delete<T extends QuotationItemDeleteArgs>(args: SelectSubset<T, QuotationItemDeleteArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuotationItem.
     * @param {QuotationItemUpdateArgs} args - Arguments to update one QuotationItem.
     * @example
     * // Update one QuotationItem
     * const quotationItem = await prisma.quotationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationItemUpdateArgs>(args: SelectSubset<T, QuotationItemUpdateArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuotationItems.
     * @param {QuotationItemDeleteManyArgs} args - Arguments to filter QuotationItems to delete.
     * @example
     * // Delete a few QuotationItems
     * const { count } = await prisma.quotationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationItemDeleteManyArgs>(args?: SelectSubset<T, QuotationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuotationItems
     * const quotationItem = await prisma.quotationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationItemUpdateManyArgs>(args: SelectSubset<T, QuotationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuotationItem.
     * @param {QuotationItemUpsertArgs} args - Arguments to update or create a QuotationItem.
     * @example
     * // Update or create a QuotationItem
     * const quotationItem = await prisma.quotationItem.upsert({
     *   create: {
     *     // ... data to create a QuotationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuotationItem we want to update
     *   }
     * })
     */
    upsert<T extends QuotationItemUpsertArgs>(args: SelectSubset<T, QuotationItemUpsertArgs<ExtArgs>>): Prisma__QuotationItemClient<$Result.GetResult<Prisma.$QuotationItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuotationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemCountArgs} args - Arguments to filter QuotationItems to count.
     * @example
     * // Count the number of QuotationItems
     * const count = await prisma.quotationItem.count({
     *   where: {
     *     // ... the filter for the QuotationItems we want to count
     *   }
     * })
    **/
    count<T extends QuotationItemCountArgs>(
      args?: Subset<T, QuotationItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuotationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationItemAggregateArgs>(args: Subset<T, QuotationItemAggregateArgs>): Prisma.PrismaPromise<GetQuotationItemAggregateType<T>>

    /**
     * Group by QuotationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationItemGroupByArgs} args - Group by arguments.
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
      T extends QuotationItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationItemGroupByArgs['orderBy'] }
        : { orderBy?: QuotationItemGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuotationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuotationItem model
   */
  readonly fields: QuotationItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuotationItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotation<T extends QuotationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotationDefaultArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuotationItem model
   */ 
  interface QuotationItemFieldRefs {
    readonly id: FieldRef<"QuotationItem", 'String'>
    readonly quotationId: FieldRef<"QuotationItem", 'String'>
    readonly finishedGoodId: FieldRef<"QuotationItem", 'String'>
    readonly quantity: FieldRef<"QuotationItem", 'Float'>
    readonly unitPrice: FieldRef<"QuotationItem", 'Float'>
    readonly totalPrice: FieldRef<"QuotationItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * QuotationItem findUnique
   */
  export type QuotationItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem findUniqueOrThrow
   */
  export type QuotationItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem findFirst
   */
  export type QuotationItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationItems.
     */
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem findFirstOrThrow
   */
  export type QuotationItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItem to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationItems.
     */
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem findMany
   */
  export type QuotationItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter, which QuotationItems to fetch.
     */
    where?: QuotationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationItems to fetch.
     */
    orderBy?: QuotationItemOrderByWithRelationInput | QuotationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuotationItems.
     */
    cursor?: QuotationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationItems.
     */
    skip?: number
    distinct?: QuotationItemScalarFieldEnum | QuotationItemScalarFieldEnum[]
  }

  /**
   * QuotationItem create
   */
  export type QuotationItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The data needed to create a QuotationItem.
     */
    data: XOR<QuotationItemCreateInput, QuotationItemUncheckedCreateInput>
  }

  /**
   * QuotationItem createMany
   */
  export type QuotationItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuotationItems.
     */
    data: QuotationItemCreateManyInput | QuotationItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuotationItem createManyAndReturn
   */
  export type QuotationItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuotationItems.
     */
    data: QuotationItemCreateManyInput | QuotationItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotationItem update
   */
  export type QuotationItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The data needed to update a QuotationItem.
     */
    data: XOR<QuotationItemUpdateInput, QuotationItemUncheckedUpdateInput>
    /**
     * Choose, which QuotationItem to update.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem updateMany
   */
  export type QuotationItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuotationItems.
     */
    data: XOR<QuotationItemUpdateManyMutationInput, QuotationItemUncheckedUpdateManyInput>
    /**
     * Filter which QuotationItems to update
     */
    where?: QuotationItemWhereInput
  }

  /**
   * QuotationItem upsert
   */
  export type QuotationItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * The filter to search for the QuotationItem to update in case it exists.
     */
    where: QuotationItemWhereUniqueInput
    /**
     * In case the QuotationItem found by the `where` argument doesn't exist, create a new QuotationItem with this data.
     */
    create: XOR<QuotationItemCreateInput, QuotationItemUncheckedCreateInput>
    /**
     * In case the QuotationItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationItemUpdateInput, QuotationItemUncheckedUpdateInput>
  }

  /**
   * QuotationItem delete
   */
  export type QuotationItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
    /**
     * Filter which QuotationItem to delete.
     */
    where: QuotationItemWhereUniqueInput
  }

  /**
   * QuotationItem deleteMany
   */
  export type QuotationItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationItems to delete
     */
    where?: QuotationItemWhereInput
  }

  /**
   * QuotationItem without action
   */
  export type QuotationItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationItem
     */
    select?: QuotationItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationItemInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type OrdersSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    quotationId: string | null
    customerName: string | null
    date: Date | null
    totalAmount: number | null
    status: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    quotationId: string | null
    customerName: string | null
    date: Date | null
    totalAmount: number | null
    status: string | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    quotationId: number
    customerName: number
    date: number
    totalAmount: number
    status: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    totalAmount?: true
  }

  export type OrdersSumAggregateInputType = {
    totalAmount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    quotationId?: true
    customerName?: true
    date?: true
    totalAmount?: true
    status?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    quotationId?: true
    customerName?: true
    date?: true
    totalAmount?: true
    status?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    quotationId?: true
    customerName?: true
    date?: true
    totalAmount?: true
    status?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    quotationId: string
    customerName: string
    date: Date
    totalAmount: number
    status: string
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    status?: boolean
    items?: boolean | Orders$itemsArgs<ExtArgs>
    invoices?: boolean | Orders$invoicesArgs<ExtArgs>
    deliveryNotes?: boolean | Orders$deliveryNotesArgs<ExtArgs>
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quotationId?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    status?: boolean
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    quotationId?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    status?: boolean
  }

  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Orders$itemsArgs<ExtArgs>
    invoices?: boolean | Orders$invoicesArgs<ExtArgs>
    deliveryNotes?: boolean | Orders$deliveryNotesArgs<ExtArgs>
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotation?: boolean | QuotationDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      items: Prisma.$OrderItemPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      deliveryNotes: Prisma.$DeliveryNotesPayload<ExtArgs>[]
      quotation: Prisma.$QuotationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quotationId: string
      customerName: string
      date: Date
      totalAmount: number
      status: string
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Orders$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    invoices<T extends Orders$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Orders$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    deliveryNotes<T extends Orders$deliveryNotesArgs<ExtArgs> = {}>(args?: Subset<T, Orders$deliveryNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "findMany"> | Null>
    quotation<T extends QuotationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotationDefaultArgs<ExtArgs>>): Prisma__QuotationClient<$Result.GetResult<Prisma.$QuotationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */ 
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly quotationId: FieldRef<"Orders", 'String'>
    readonly customerName: FieldRef<"Orders", 'String'>
    readonly date: FieldRef<"Orders", 'DateTime'>
    readonly totalAmount: FieldRef<"Orders", 'Float'>
    readonly status: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders.items
   */
  export type Orders$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Orders.invoices
   */
  export type Orders$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Orders.deliveryNotes
   */
  export type Orders$deliveryNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    where?: DeliveryNotesWhereInput
    orderBy?: DeliveryNotesOrderByWithRelationInput | DeliveryNotesOrderByWithRelationInput[]
    cursor?: DeliveryNotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryNotesScalarFieldEnum | DeliveryNotesScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    finishedGoodId: string | null
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    finishedGoodId: string | null
    quantity: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    finishedGoodId: number
    quantity: number
    unitPrice: number
    totalPrice: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    finishedGoodId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    finishedGoodId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    finishedGoodId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    finishedGoodId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    finishedGoodId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    finishedGoodId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      finishedGoodId: string
      quantity: number
      unitPrice: number
      totalPrice: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly finishedGoodId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Float'>
    readonly unitPrice: FieldRef<"OrderItem", 'Float'>
    readonly totalPrice: FieldRef<"OrderItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryNotes
   */

  export type AggregateDeliveryNotes = {
    _count: DeliveryNotesCountAggregateOutputType | null
    _min: DeliveryNotesMinAggregateOutputType | null
    _max: DeliveryNotesMaxAggregateOutputType | null
  }

  export type DeliveryNotesMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    customerName: string | null
    date: Date | null
  }

  export type DeliveryNotesMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    customerName: string | null
    date: Date | null
  }

  export type DeliveryNotesCountAggregateOutputType = {
    id: number
    orderId: number
    customerName: number
    date: number
    _all: number
  }


  export type DeliveryNotesMinAggregateInputType = {
    id?: true
    orderId?: true
    customerName?: true
    date?: true
  }

  export type DeliveryNotesMaxAggregateInputType = {
    id?: true
    orderId?: true
    customerName?: true
    date?: true
  }

  export type DeliveryNotesCountAggregateInputType = {
    id?: true
    orderId?: true
    customerName?: true
    date?: true
    _all?: true
  }

  export type DeliveryNotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryNotes to aggregate.
     */
    where?: DeliveryNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryNotes to fetch.
     */
    orderBy?: DeliveryNotesOrderByWithRelationInput | DeliveryNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryNotes
    **/
    _count?: true | DeliveryNotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryNotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryNotesMaxAggregateInputType
  }

  export type GetDeliveryNotesAggregateType<T extends DeliveryNotesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryNotes[P]>
      : GetScalarType<T[P], AggregateDeliveryNotes[P]>
  }




  export type DeliveryNotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryNotesWhereInput
    orderBy?: DeliveryNotesOrderByWithAggregationInput | DeliveryNotesOrderByWithAggregationInput[]
    by: DeliveryNotesScalarFieldEnum[] | DeliveryNotesScalarFieldEnum
    having?: DeliveryNotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryNotesCountAggregateInputType | true
    _min?: DeliveryNotesMinAggregateInputType
    _max?: DeliveryNotesMaxAggregateInputType
  }

  export type DeliveryNotesGroupByOutputType = {
    id: string
    orderId: string
    customerName: string
    date: Date
    _count: DeliveryNotesCountAggregateOutputType | null
    _min: DeliveryNotesMinAggregateOutputType | null
    _max: DeliveryNotesMaxAggregateOutputType | null
  }

  type GetDeliveryNotesGroupByPayload<T extends DeliveryNotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryNotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryNotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryNotesGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryNotesGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryNotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    customerName?: boolean
    date?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryNotes"]>

  export type DeliveryNotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    customerName?: boolean
    date?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryNotes"]>

  export type DeliveryNotesSelectScalar = {
    id?: boolean
    orderId?: boolean
    customerName?: boolean
    date?: boolean
  }

  export type DeliveryNotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type DeliveryNotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $DeliveryNotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryNotes"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      customerName: string
      date: Date
    }, ExtArgs["result"]["deliveryNotes"]>
    composites: {}
  }

  type DeliveryNotesGetPayload<S extends boolean | null | undefined | DeliveryNotesDefaultArgs> = $Result.GetResult<Prisma.$DeliveryNotesPayload, S>

  type DeliveryNotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeliveryNotesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeliveryNotesCountAggregateInputType | true
    }

  export interface DeliveryNotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryNotes'], meta: { name: 'DeliveryNotes' } }
    /**
     * Find zero or one DeliveryNotes that matches the filter.
     * @param {DeliveryNotesFindUniqueArgs} args - Arguments to find a DeliveryNotes
     * @example
     * // Get one DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryNotesFindUniqueArgs>(args: SelectSubset<T, DeliveryNotesFindUniqueArgs<ExtArgs>>): Prisma__DeliveryNotesClient<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeliveryNotes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeliveryNotesFindUniqueOrThrowArgs} args - Arguments to find a DeliveryNotes
     * @example
     * // Get one DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryNotesFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryNotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryNotesClient<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeliveryNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNotesFindFirstArgs} args - Arguments to find a DeliveryNotes
     * @example
     * // Get one DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryNotesFindFirstArgs>(args?: SelectSubset<T, DeliveryNotesFindFirstArgs<ExtArgs>>): Prisma__DeliveryNotesClient<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeliveryNotes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNotesFindFirstOrThrowArgs} args - Arguments to find a DeliveryNotes
     * @example
     * // Get one DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryNotesFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryNotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryNotesClient<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeliveryNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.findMany()
     * 
     * // Get first 10 DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryNotesWithIdOnly = await prisma.deliveryNotes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryNotesFindManyArgs>(args?: SelectSubset<T, DeliveryNotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeliveryNotes.
     * @param {DeliveryNotesCreateArgs} args - Arguments to create a DeliveryNotes.
     * @example
     * // Create one DeliveryNotes
     * const DeliveryNotes = await prisma.deliveryNotes.create({
     *   data: {
     *     // ... data to create a DeliveryNotes
     *   }
     * })
     * 
     */
    create<T extends DeliveryNotesCreateArgs>(args: SelectSubset<T, DeliveryNotesCreateArgs<ExtArgs>>): Prisma__DeliveryNotesClient<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeliveryNotes.
     * @param {DeliveryNotesCreateManyArgs} args - Arguments to create many DeliveryNotes.
     * @example
     * // Create many DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryNotesCreateManyArgs>(args?: SelectSubset<T, DeliveryNotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryNotes and returns the data saved in the database.
     * @param {DeliveryNotesCreateManyAndReturnArgs} args - Arguments to create many DeliveryNotes.
     * @example
     * // Create many DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryNotes and only return the `id`
     * const deliveryNotesWithIdOnly = await prisma.deliveryNotes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryNotesCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryNotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeliveryNotes.
     * @param {DeliveryNotesDeleteArgs} args - Arguments to delete one DeliveryNotes.
     * @example
     * // Delete one DeliveryNotes
     * const DeliveryNotes = await prisma.deliveryNotes.delete({
     *   where: {
     *     // ... filter to delete one DeliveryNotes
     *   }
     * })
     * 
     */
    delete<T extends DeliveryNotesDeleteArgs>(args: SelectSubset<T, DeliveryNotesDeleteArgs<ExtArgs>>): Prisma__DeliveryNotesClient<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeliveryNotes.
     * @param {DeliveryNotesUpdateArgs} args - Arguments to update one DeliveryNotes.
     * @example
     * // Update one DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryNotesUpdateArgs>(args: SelectSubset<T, DeliveryNotesUpdateArgs<ExtArgs>>): Prisma__DeliveryNotesClient<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeliveryNotes.
     * @param {DeliveryNotesDeleteManyArgs} args - Arguments to filter DeliveryNotes to delete.
     * @example
     * // Delete a few DeliveryNotes
     * const { count } = await prisma.deliveryNotes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryNotesDeleteManyArgs>(args?: SelectSubset<T, DeliveryNotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryNotesUpdateManyArgs>(args: SelectSubset<T, DeliveryNotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeliveryNotes.
     * @param {DeliveryNotesUpsertArgs} args - Arguments to update or create a DeliveryNotes.
     * @example
     * // Update or create a DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNotes.upsert({
     *   create: {
     *     // ... data to create a DeliveryNotes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryNotes we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryNotesUpsertArgs>(args: SelectSubset<T, DeliveryNotesUpsertArgs<ExtArgs>>): Prisma__DeliveryNotesClient<$Result.GetResult<Prisma.$DeliveryNotesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeliveryNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNotesCountArgs} args - Arguments to filter DeliveryNotes to count.
     * @example
     * // Count the number of DeliveryNotes
     * const count = await prisma.deliveryNotes.count({
     *   where: {
     *     // ... the filter for the DeliveryNotes we want to count
     *   }
     * })
    **/
    count<T extends DeliveryNotesCountArgs>(
      args?: Subset<T, DeliveryNotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryNotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryNotesAggregateArgs>(args: Subset<T, DeliveryNotesAggregateArgs>): Prisma.PrismaPromise<GetDeliveryNotesAggregateType<T>>

    /**
     * Group by DeliveryNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNotesGroupByArgs} args - Group by arguments.
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
      T extends DeliveryNotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryNotesGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryNotesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryNotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryNotes model
   */
  readonly fields: DeliveryNotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryNotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryNotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryNotes model
   */ 
  interface DeliveryNotesFieldRefs {
    readonly id: FieldRef<"DeliveryNotes", 'String'>
    readonly orderId: FieldRef<"DeliveryNotes", 'String'>
    readonly customerName: FieldRef<"DeliveryNotes", 'String'>
    readonly date: FieldRef<"DeliveryNotes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryNotes findUnique
   */
  export type DeliveryNotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNotes to fetch.
     */
    where: DeliveryNotesWhereUniqueInput
  }

  /**
   * DeliveryNotes findUniqueOrThrow
   */
  export type DeliveryNotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNotes to fetch.
     */
    where: DeliveryNotesWhereUniqueInput
  }

  /**
   * DeliveryNotes findFirst
   */
  export type DeliveryNotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNotes to fetch.
     */
    where?: DeliveryNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryNotes to fetch.
     */
    orderBy?: DeliveryNotesOrderByWithRelationInput | DeliveryNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryNotes.
     */
    cursor?: DeliveryNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryNotes.
     */
    distinct?: DeliveryNotesScalarFieldEnum | DeliveryNotesScalarFieldEnum[]
  }

  /**
   * DeliveryNotes findFirstOrThrow
   */
  export type DeliveryNotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNotes to fetch.
     */
    where?: DeliveryNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryNotes to fetch.
     */
    orderBy?: DeliveryNotesOrderByWithRelationInput | DeliveryNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryNotes.
     */
    cursor?: DeliveryNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryNotes.
     */
    distinct?: DeliveryNotesScalarFieldEnum | DeliveryNotesScalarFieldEnum[]
  }

  /**
   * DeliveryNotes findMany
   */
  export type DeliveryNotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNotes to fetch.
     */
    where?: DeliveryNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryNotes to fetch.
     */
    orderBy?: DeliveryNotesOrderByWithRelationInput | DeliveryNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryNotes.
     */
    cursor?: DeliveryNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryNotes.
     */
    skip?: number
    distinct?: DeliveryNotesScalarFieldEnum | DeliveryNotesScalarFieldEnum[]
  }

  /**
   * DeliveryNotes create
   */
  export type DeliveryNotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryNotes.
     */
    data: XOR<DeliveryNotesCreateInput, DeliveryNotesUncheckedCreateInput>
  }

  /**
   * DeliveryNotes createMany
   */
  export type DeliveryNotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryNotes.
     */
    data: DeliveryNotesCreateManyInput | DeliveryNotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryNotes createManyAndReturn
   */
  export type DeliveryNotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeliveryNotes.
     */
    data: DeliveryNotesCreateManyInput | DeliveryNotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryNotes update
   */
  export type DeliveryNotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryNotes.
     */
    data: XOR<DeliveryNotesUpdateInput, DeliveryNotesUncheckedUpdateInput>
    /**
     * Choose, which DeliveryNotes to update.
     */
    where: DeliveryNotesWhereUniqueInput
  }

  /**
   * DeliveryNotes updateMany
   */
  export type DeliveryNotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryNotes.
     */
    data: XOR<DeliveryNotesUpdateManyMutationInput, DeliveryNotesUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryNotes to update
     */
    where?: DeliveryNotesWhereInput
  }

  /**
   * DeliveryNotes upsert
   */
  export type DeliveryNotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryNotes to update in case it exists.
     */
    where: DeliveryNotesWhereUniqueInput
    /**
     * In case the DeliveryNotes found by the `where` argument doesn't exist, create a new DeliveryNotes with this data.
     */
    create: XOR<DeliveryNotesCreateInput, DeliveryNotesUncheckedCreateInput>
    /**
     * In case the DeliveryNotes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryNotesUpdateInput, DeliveryNotesUncheckedUpdateInput>
  }

  /**
   * DeliveryNotes delete
   */
  export type DeliveryNotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
    /**
     * Filter which DeliveryNotes to delete.
     */
    where: DeliveryNotesWhereUniqueInput
  }

  /**
   * DeliveryNotes deleteMany
   */
  export type DeliveryNotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryNotes to delete
     */
    where?: DeliveryNotesWhereInput
  }

  /**
   * DeliveryNotes without action
   */
  export type DeliveryNotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNotes
     */
    select?: DeliveryNotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNotesInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    customerName: string | null
    date: Date | null
    totalAmount: number | null
    status: string | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    customerName: string | null
    date: Date | null
    totalAmount: number | null
    status: string | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    orderId: number
    customerName: number
    date: number
    totalAmount: number
    status: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    totalAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    totalAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    orderId?: true
    customerName?: true
    date?: true
    totalAmount?: true
    status?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    orderId?: true
    customerName?: true
    date?: true
    totalAmount?: true
    status?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    orderId?: true
    customerName?: true
    date?: true
    totalAmount?: true
    status?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    orderId: string
    customerName: string
    date: Date
    totalAmount: number
    status: string
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    status?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    status?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    orderId?: boolean
    customerName?: boolean
    date?: boolean
    totalAmount?: boolean
    status?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      customerName: string
      date: Date
      totalAmount: number
      status: string
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly orderId: FieldRef<"Invoice", 'String'>
    readonly customerName: FieldRef<"Invoice", 'String'>
    readonly date: FieldRef<"Invoice", 'DateTime'>
    readonly totalAmount: FieldRef<"Invoice", 'Float'>
    readonly status: FieldRef<"Invoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    quantitySold: number | null
    totalPrice: number | null
  }

  export type SalesSumAggregateOutputType = {
    quantitySold: number | null
    totalPrice: number | null
  }

  export type SalesMinAggregateOutputType = {
    id: string | null
    finishedGoodId: string | null
    quantitySold: number | null
    saleDate: Date | null
    customerName: string | null
    totalPrice: number | null
  }

  export type SalesMaxAggregateOutputType = {
    id: string | null
    finishedGoodId: string | null
    quantitySold: number | null
    saleDate: Date | null
    customerName: string | null
    totalPrice: number | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    finishedGoodId: number
    quantitySold: number
    saleDate: number
    customerName: number
    totalPrice: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    quantitySold?: true
    totalPrice?: true
  }

  export type SalesSumAggregateInputType = {
    quantitySold?: true
    totalPrice?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    finishedGoodId?: true
    quantitySold?: true
    saleDate?: true
    customerName?: true
    totalPrice?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    finishedGoodId?: true
    quantitySold?: true
    saleDate?: true
    customerName?: true
    totalPrice?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    finishedGoodId?: true
    quantitySold?: true
    saleDate?: true
    customerName?: true
    totalPrice?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: string
    finishedGoodId: string
    quantitySold: number
    saleDate: Date
    customerName: string
    totalPrice: number
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finishedGoodId?: boolean
    quantitySold?: boolean
    saleDate?: boolean
    customerName?: boolean
    totalPrice?: boolean
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finishedGoodId?: boolean
    quantitySold?: boolean
    saleDate?: boolean
    customerName?: boolean
    totalPrice?: boolean
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    id?: boolean
    finishedGoodId?: boolean
    quantitySold?: boolean
    saleDate?: boolean
    customerName?: boolean
    totalPrice?: boolean
  }


  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      finishedGoodId: string
      quantitySold: number
      saleDate: Date
      customerName: string
      totalPrice: number
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
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
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sales model
   */ 
  interface SalesFieldRefs {
    readonly id: FieldRef<"Sales", 'String'>
    readonly finishedGoodId: FieldRef<"Sales", 'String'>
    readonly quantitySold: FieldRef<"Sales", 'Float'>
    readonly saleDate: FieldRef<"Sales", 'DateTime'>
    readonly customerName: FieldRef<"Sales", 'String'>
    readonly totalPrice: FieldRef<"Sales", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    published: 'published',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    hashedPassword: 'hashedPassword'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    unit: 'unit',
    costPerUnit: 'costPerUnit',
    category: 'category'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contactInfo: 'contactInfo',
    address: 'address',
    email: 'email',
    phone: 'phone'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const MaterialSupplierScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    supplierId: 'supplierId'
  };

  export type MaterialSupplierScalarFieldEnum = (typeof MaterialSupplierScalarFieldEnum)[keyof typeof MaterialSupplierScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    quantity: 'quantity',
    location: 'location',
    lastUpdated: 'lastUpdated'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const UsageScalarFieldEnum: {
    id: 'id',
    materialId: 'materialId',
    quantityUsed: 'quantityUsed',
    dateUsed: 'dateUsed',
    batchNumber: 'batchNumber'
  };

  export type UsageScalarFieldEnum = (typeof UsageScalarFieldEnum)[keyof typeof UsageScalarFieldEnum]


  export const FinishedGoodsScalarFieldEnum: {
    id: 'id',
    batchNumber: 'batchNumber',
    name: 'name',
    description: 'description',
    unit: 'unit',
    pricePerUnit: 'pricePerUnit',
    pricePerUnitFormatted: 'pricePerUnitFormatted',
    color: 'color',
    finish: 'finish',
    createdAt: 'createdAt'
  };

  export type FinishedGoodsScalarFieldEnum = (typeof FinishedGoodsScalarFieldEnum)[keyof typeof FinishedGoodsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FinishedGoodStockScalarFieldEnum: {
    id: 'id',
    finishedGoodsId: 'finishedGoodsId',
    quantity: 'quantity',
    location: 'location',
    lastUpdated: 'lastUpdated'
  };

  export type FinishedGoodStockScalarFieldEnum = (typeof FinishedGoodStockScalarFieldEnum)[keyof typeof FinishedGoodStockScalarFieldEnum]


  export const QuotationScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    date: 'date',
    totalAmount: 'totalAmount',
    discount: 'discount',
    vat: 'vat',
    status: 'status'
  };

  export type QuotationScalarFieldEnum = (typeof QuotationScalarFieldEnum)[keyof typeof QuotationScalarFieldEnum]


  export const QuotationItemScalarFieldEnum: {
    id: 'id',
    quotationId: 'quotationId',
    finishedGoodId: 'finishedGoodId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice'
  };

  export type QuotationItemScalarFieldEnum = (typeof QuotationItemScalarFieldEnum)[keyof typeof QuotationItemScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    quotationId: 'quotationId',
    customerName: 'customerName',
    date: 'date',
    totalAmount: 'totalAmount',
    status: 'status'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    finishedGoodId: 'finishedGoodId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const DeliveryNotesScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    customerName: 'customerName',
    date: 'date'
  };

  export type DeliveryNotesScalarFieldEnum = (typeof DeliveryNotesScalarFieldEnum)[keyof typeof DeliveryNotesScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    customerName: 'customerName',
    date: 'date',
    totalAmount: 'totalAmount',
    status: 'status'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    finishedGoodId: 'finishedGoodId',
    quantitySold: 'quantitySold',
    saleDate: 'saleDate',
    customerName: 'customerName',
    totalPrice: 'totalPrice'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    createAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    published?: BoolFilter<"Post"> | boolean
    createAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    createAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    hashedPassword?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    name?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    unit?: StringFilter<"Material"> | string
    costPerUnit?: FloatFilter<"Material"> | number
    category?: StringFilter<"Material"> | string
    stock?: StockListRelationFilter
    usage?: UsageListRelationFilter
    MaterialSupplier?: MaterialSupplierListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    category?: SortOrder
    stock?: StockOrderByRelationAggregateInput
    usage?: UsageOrderByRelationAggregateInput
    MaterialSupplier?: MaterialSupplierOrderByRelationAggregateInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    name?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    unit?: StringFilter<"Material"> | string
    costPerUnit?: FloatFilter<"Material"> | number
    category?: StringFilter<"Material"> | string
    stock?: StockListRelationFilter
    usage?: UsageListRelationFilter
    MaterialSupplier?: MaterialSupplierListRelationFilter
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    category?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    name?: StringWithAggregatesFilter<"Material"> | string
    description?: StringNullableWithAggregatesFilter<"Material"> | string | null
    unit?: StringWithAggregatesFilter<"Material"> | string
    costPerUnit?: FloatWithAggregatesFilter<"Material"> | number
    category?: StringWithAggregatesFilter<"Material"> | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    contactInfo?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    email?: StringFilter<"Supplier"> | string
    phone?: StringFilter<"Supplier"> | string
    materials?: MaterialSupplierListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contactInfo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    materials?: MaterialSupplierOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    contactInfo?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    email?: StringFilter<"Supplier"> | string
    phone?: StringFilter<"Supplier"> | string
    materials?: MaterialSupplierListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contactInfo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    contactInfo?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringWithAggregatesFilter<"Supplier"> | string
  }

  export type MaterialSupplierWhereInput = {
    AND?: MaterialSupplierWhereInput | MaterialSupplierWhereInput[]
    OR?: MaterialSupplierWhereInput[]
    NOT?: MaterialSupplierWhereInput | MaterialSupplierWhereInput[]
    id?: StringFilter<"MaterialSupplier"> | string
    materialId?: StringFilter<"MaterialSupplier"> | string
    supplierId?: StringFilter<"MaterialSupplier"> | string
    material?: XOR<MaterialRelationFilter, MaterialWhereInput>
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
  }

  export type MaterialSupplierOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    supplierId?: SortOrder
    material?: MaterialOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
  }

  export type MaterialSupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialSupplierWhereInput | MaterialSupplierWhereInput[]
    OR?: MaterialSupplierWhereInput[]
    NOT?: MaterialSupplierWhereInput | MaterialSupplierWhereInput[]
    materialId?: StringFilter<"MaterialSupplier"> | string
    supplierId?: StringFilter<"MaterialSupplier"> | string
    material?: XOR<MaterialRelationFilter, MaterialWhereInput>
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
  }, "id">

  export type MaterialSupplierOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    supplierId?: SortOrder
    _count?: MaterialSupplierCountOrderByAggregateInput
    _max?: MaterialSupplierMaxOrderByAggregateInput
    _min?: MaterialSupplierMinOrderByAggregateInput
  }

  export type MaterialSupplierScalarWhereWithAggregatesInput = {
    AND?: MaterialSupplierScalarWhereWithAggregatesInput | MaterialSupplierScalarWhereWithAggregatesInput[]
    OR?: MaterialSupplierScalarWhereWithAggregatesInput[]
    NOT?: MaterialSupplierScalarWhereWithAggregatesInput | MaterialSupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaterialSupplier"> | string
    materialId?: StringWithAggregatesFilter<"MaterialSupplier"> | string
    supplierId?: StringWithAggregatesFilter<"MaterialSupplier"> | string
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id?: StringFilter<"Stock"> | string
    materialId?: StringFilter<"Stock"> | string
    quantity?: FloatFilter<"Stock"> | number
    location?: StringFilter<"Stock"> | string
    lastUpdated?: DateTimeFilter<"Stock"> | Date | string
    material?: XOR<MaterialRelationFilter, MaterialWhereInput>
  }

  export type StockOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
    material?: MaterialOrderByWithRelationInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    materialId?: StringFilter<"Stock"> | string
    quantity?: FloatFilter<"Stock"> | number
    location?: StringFilter<"Stock"> | string
    lastUpdated?: DateTimeFilter<"Stock"> | Date | string
    material?: XOR<MaterialRelationFilter, MaterialWhereInput>
  }, "id">

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
    _count?: StockCountOrderByAggregateInput
    _avg?: StockAvgOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
    _sum?: StockSumOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stock"> | string
    materialId?: StringWithAggregatesFilter<"Stock"> | string
    quantity?: FloatWithAggregatesFilter<"Stock"> | number
    location?: StringWithAggregatesFilter<"Stock"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"Stock"> | Date | string
  }

  export type UsageWhereInput = {
    AND?: UsageWhereInput | UsageWhereInput[]
    OR?: UsageWhereInput[]
    NOT?: UsageWhereInput | UsageWhereInput[]
    id?: StringFilter<"Usage"> | string
    materialId?: StringFilter<"Usage"> | string
    quantityUsed?: FloatFilter<"Usage"> | number
    dateUsed?: DateTimeFilter<"Usage"> | Date | string
    batchNumber?: StringNullableFilter<"Usage"> | string | null
    material?: XOR<MaterialRelationFilter, MaterialWhereInput>
  }

  export type UsageOrderByWithRelationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantityUsed?: SortOrder
    dateUsed?: SortOrder
    batchNumber?: SortOrderInput | SortOrder
    material?: MaterialOrderByWithRelationInput
  }

  export type UsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsageWhereInput | UsageWhereInput[]
    OR?: UsageWhereInput[]
    NOT?: UsageWhereInput | UsageWhereInput[]
    materialId?: StringFilter<"Usage"> | string
    quantityUsed?: FloatFilter<"Usage"> | number
    dateUsed?: DateTimeFilter<"Usage"> | Date | string
    batchNumber?: StringNullableFilter<"Usage"> | string | null
    material?: XOR<MaterialRelationFilter, MaterialWhereInput>
  }, "id">

  export type UsageOrderByWithAggregationInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantityUsed?: SortOrder
    dateUsed?: SortOrder
    batchNumber?: SortOrderInput | SortOrder
    _count?: UsageCountOrderByAggregateInput
    _avg?: UsageAvgOrderByAggregateInput
    _max?: UsageMaxOrderByAggregateInput
    _min?: UsageMinOrderByAggregateInput
    _sum?: UsageSumOrderByAggregateInput
  }

  export type UsageScalarWhereWithAggregatesInput = {
    AND?: UsageScalarWhereWithAggregatesInput | UsageScalarWhereWithAggregatesInput[]
    OR?: UsageScalarWhereWithAggregatesInput[]
    NOT?: UsageScalarWhereWithAggregatesInput | UsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usage"> | string
    materialId?: StringWithAggregatesFilter<"Usage"> | string
    quantityUsed?: FloatWithAggregatesFilter<"Usage"> | number
    dateUsed?: DateTimeWithAggregatesFilter<"Usage"> | Date | string
    batchNumber?: StringNullableWithAggregatesFilter<"Usage"> | string | null
  }

  export type FinishedGoodsWhereInput = {
    AND?: FinishedGoodsWhereInput | FinishedGoodsWhereInput[]
    OR?: FinishedGoodsWhereInput[]
    NOT?: FinishedGoodsWhereInput | FinishedGoodsWhereInput[]
    id?: StringFilter<"FinishedGoods"> | string
    batchNumber?: StringFilter<"FinishedGoods"> | string
    name?: StringFilter<"FinishedGoods"> | string
    description?: StringNullableFilter<"FinishedGoods"> | string | null
    unit?: StringFilter<"FinishedGoods"> | string
    pricePerUnit?: FloatFilter<"FinishedGoods"> | number
    pricePerUnitFormatted?: StringFilter<"FinishedGoods"> | string
    color?: StringNullableFilter<"FinishedGoods"> | string | null
    finish?: StringNullableFilter<"FinishedGoods"> | string | null
    createdAt?: DateTimeFilter<"FinishedGoods"> | Date | string
  }

  export type FinishedGoodsOrderByWithRelationInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrder
    pricePerUnitFormatted?: SortOrder
    color?: SortOrderInput | SortOrder
    finish?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type FinishedGoodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinishedGoodsWhereInput | FinishedGoodsWhereInput[]
    OR?: FinishedGoodsWhereInput[]
    NOT?: FinishedGoodsWhereInput | FinishedGoodsWhereInput[]
    batchNumber?: StringFilter<"FinishedGoods"> | string
    name?: StringFilter<"FinishedGoods"> | string
    description?: StringNullableFilter<"FinishedGoods"> | string | null
    unit?: StringFilter<"FinishedGoods"> | string
    pricePerUnit?: FloatFilter<"FinishedGoods"> | number
    pricePerUnitFormatted?: StringFilter<"FinishedGoods"> | string
    color?: StringNullableFilter<"FinishedGoods"> | string | null
    finish?: StringNullableFilter<"FinishedGoods"> | string | null
    createdAt?: DateTimeFilter<"FinishedGoods"> | Date | string
  }, "id">

  export type FinishedGoodsOrderByWithAggregationInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrder
    pricePerUnitFormatted?: SortOrder
    color?: SortOrderInput | SortOrder
    finish?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FinishedGoodsCountOrderByAggregateInput
    _avg?: FinishedGoodsAvgOrderByAggregateInput
    _max?: FinishedGoodsMaxOrderByAggregateInput
    _min?: FinishedGoodsMinOrderByAggregateInput
    _sum?: FinishedGoodsSumOrderByAggregateInput
  }

  export type FinishedGoodsScalarWhereWithAggregatesInput = {
    AND?: FinishedGoodsScalarWhereWithAggregatesInput | FinishedGoodsScalarWhereWithAggregatesInput[]
    OR?: FinishedGoodsScalarWhereWithAggregatesInput[]
    NOT?: FinishedGoodsScalarWhereWithAggregatesInput | FinishedGoodsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinishedGoods"> | string
    batchNumber?: StringWithAggregatesFilter<"FinishedGoods"> | string
    name?: StringWithAggregatesFilter<"FinishedGoods"> | string
    description?: StringNullableWithAggregatesFilter<"FinishedGoods"> | string | null
    unit?: StringWithAggregatesFilter<"FinishedGoods"> | string
    pricePerUnit?: FloatWithAggregatesFilter<"FinishedGoods"> | number
    pricePerUnitFormatted?: StringWithAggregatesFilter<"FinishedGoods"> | string
    color?: StringNullableWithAggregatesFilter<"FinishedGoods"> | string | null
    finish?: StringNullableWithAggregatesFilter<"FinishedGoods"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FinishedGoods"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type FinishedGoodStockWhereInput = {
    AND?: FinishedGoodStockWhereInput | FinishedGoodStockWhereInput[]
    OR?: FinishedGoodStockWhereInput[]
    NOT?: FinishedGoodStockWhereInput | FinishedGoodStockWhereInput[]
    id?: StringFilter<"FinishedGoodStock"> | string
    finishedGoodsId?: StringFilter<"FinishedGoodStock"> | string
    quantity?: FloatFilter<"FinishedGoodStock"> | number
    location?: StringFilter<"FinishedGoodStock"> | string
    lastUpdated?: DateTimeFilter<"FinishedGoodStock"> | Date | string
  }

  export type FinishedGoodStockOrderByWithRelationInput = {
    id?: SortOrder
    finishedGoodsId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FinishedGoodStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinishedGoodStockWhereInput | FinishedGoodStockWhereInput[]
    OR?: FinishedGoodStockWhereInput[]
    NOT?: FinishedGoodStockWhereInput | FinishedGoodStockWhereInput[]
    finishedGoodsId?: StringFilter<"FinishedGoodStock"> | string
    quantity?: FloatFilter<"FinishedGoodStock"> | number
    location?: StringFilter<"FinishedGoodStock"> | string
    lastUpdated?: DateTimeFilter<"FinishedGoodStock"> | Date | string
  }, "id">

  export type FinishedGoodStockOrderByWithAggregationInput = {
    id?: SortOrder
    finishedGoodsId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
    _count?: FinishedGoodStockCountOrderByAggregateInput
    _avg?: FinishedGoodStockAvgOrderByAggregateInput
    _max?: FinishedGoodStockMaxOrderByAggregateInput
    _min?: FinishedGoodStockMinOrderByAggregateInput
    _sum?: FinishedGoodStockSumOrderByAggregateInput
  }

  export type FinishedGoodStockScalarWhereWithAggregatesInput = {
    AND?: FinishedGoodStockScalarWhereWithAggregatesInput | FinishedGoodStockScalarWhereWithAggregatesInput[]
    OR?: FinishedGoodStockScalarWhereWithAggregatesInput[]
    NOT?: FinishedGoodStockScalarWhereWithAggregatesInput | FinishedGoodStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinishedGoodStock"> | string
    finishedGoodsId?: StringWithAggregatesFilter<"FinishedGoodStock"> | string
    quantity?: FloatWithAggregatesFilter<"FinishedGoodStock"> | number
    location?: StringWithAggregatesFilter<"FinishedGoodStock"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"FinishedGoodStock"> | Date | string
  }

  export type QuotationWhereInput = {
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    id?: StringFilter<"Quotation"> | string
    customerName?: StringFilter<"Quotation"> | string
    date?: DateTimeFilter<"Quotation"> | Date | string
    totalAmount?: FloatFilter<"Quotation"> | number
    discount?: FloatNullableFilter<"Quotation"> | number | null
    vat?: FloatNullableFilter<"Quotation"> | number | null
    status?: StringFilter<"Quotation"> | string
    items?: QuotationItemListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type QuotationOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    discount?: SortOrderInput | SortOrder
    vat?: SortOrderInput | SortOrder
    status?: SortOrder
    items?: QuotationItemOrderByRelationAggregateInput
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type QuotationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuotationWhereInput | QuotationWhereInput[]
    OR?: QuotationWhereInput[]
    NOT?: QuotationWhereInput | QuotationWhereInput[]
    customerName?: StringFilter<"Quotation"> | string
    date?: DateTimeFilter<"Quotation"> | Date | string
    totalAmount?: FloatFilter<"Quotation"> | number
    discount?: FloatNullableFilter<"Quotation"> | number | null
    vat?: FloatNullableFilter<"Quotation"> | number | null
    status?: StringFilter<"Quotation"> | string
    items?: QuotationItemListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id">

  export type QuotationOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    discount?: SortOrderInput | SortOrder
    vat?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: QuotationCountOrderByAggregateInput
    _avg?: QuotationAvgOrderByAggregateInput
    _max?: QuotationMaxOrderByAggregateInput
    _min?: QuotationMinOrderByAggregateInput
    _sum?: QuotationSumOrderByAggregateInput
  }

  export type QuotationScalarWhereWithAggregatesInput = {
    AND?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    OR?: QuotationScalarWhereWithAggregatesInput[]
    NOT?: QuotationScalarWhereWithAggregatesInput | QuotationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quotation"> | string
    customerName?: StringWithAggregatesFilter<"Quotation"> | string
    date?: DateTimeWithAggregatesFilter<"Quotation"> | Date | string
    totalAmount?: FloatWithAggregatesFilter<"Quotation"> | number
    discount?: FloatNullableWithAggregatesFilter<"Quotation"> | number | null
    vat?: FloatNullableWithAggregatesFilter<"Quotation"> | number | null
    status?: StringWithAggregatesFilter<"Quotation"> | string
  }

  export type QuotationItemWhereInput = {
    AND?: QuotationItemWhereInput | QuotationItemWhereInput[]
    OR?: QuotationItemWhereInput[]
    NOT?: QuotationItemWhereInput | QuotationItemWhereInput[]
    id?: StringFilter<"QuotationItem"> | string
    quotationId?: StringFilter<"QuotationItem"> | string
    finishedGoodId?: StringFilter<"QuotationItem"> | string
    quantity?: FloatFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    totalPrice?: FloatFilter<"QuotationItem"> | number
    quotation?: XOR<QuotationRelationFilter, QuotationWhereInput>
  }

  export type QuotationItemOrderByWithRelationInput = {
    id?: SortOrder
    quotationId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    quotation?: QuotationOrderByWithRelationInput
  }

  export type QuotationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuotationItemWhereInput | QuotationItemWhereInput[]
    OR?: QuotationItemWhereInput[]
    NOT?: QuotationItemWhereInput | QuotationItemWhereInput[]
    quotationId?: StringFilter<"QuotationItem"> | string
    finishedGoodId?: StringFilter<"QuotationItem"> | string
    quantity?: FloatFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    totalPrice?: FloatFilter<"QuotationItem"> | number
    quotation?: XOR<QuotationRelationFilter, QuotationWhereInput>
  }, "id">

  export type QuotationItemOrderByWithAggregationInput = {
    id?: SortOrder
    quotationId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    _count?: QuotationItemCountOrderByAggregateInput
    _avg?: QuotationItemAvgOrderByAggregateInput
    _max?: QuotationItemMaxOrderByAggregateInput
    _min?: QuotationItemMinOrderByAggregateInput
    _sum?: QuotationItemSumOrderByAggregateInput
  }

  export type QuotationItemScalarWhereWithAggregatesInput = {
    AND?: QuotationItemScalarWhereWithAggregatesInput | QuotationItemScalarWhereWithAggregatesInput[]
    OR?: QuotationItemScalarWhereWithAggregatesInput[]
    NOT?: QuotationItemScalarWhereWithAggregatesInput | QuotationItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuotationItem"> | string
    quotationId?: StringWithAggregatesFilter<"QuotationItem"> | string
    finishedGoodId?: StringWithAggregatesFilter<"QuotationItem"> | string
    quantity?: FloatWithAggregatesFilter<"QuotationItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"QuotationItem"> | number
    totalPrice?: FloatWithAggregatesFilter<"QuotationItem"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: StringFilter<"Orders"> | string
    quotationId?: StringFilter<"Orders"> | string
    customerName?: StringFilter<"Orders"> | string
    date?: DateTimeFilter<"Orders"> | Date | string
    totalAmount?: FloatFilter<"Orders"> | number
    status?: StringFilter<"Orders"> | string
    items?: OrderItemListRelationFilter
    invoices?: InvoiceListRelationFilter
    deliveryNotes?: DeliveryNotesListRelationFilter
    quotation?: XOR<QuotationRelationFilter, QuotationWhereInput>
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    quotationId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    items?: OrderItemOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    deliveryNotes?: DeliveryNotesOrderByRelationAggregateInput
    quotation?: QuotationOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    quotationId?: StringFilter<"Orders"> | string
    customerName?: StringFilter<"Orders"> | string
    date?: DateTimeFilter<"Orders"> | Date | string
    totalAmount?: FloatFilter<"Orders"> | number
    status?: StringFilter<"Orders"> | string
    items?: OrderItemListRelationFilter
    invoices?: InvoiceListRelationFilter
    deliveryNotes?: DeliveryNotesListRelationFilter
    quotation?: XOR<QuotationRelationFilter, QuotationWhereInput>
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    quotationId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orders"> | string
    quotationId?: StringWithAggregatesFilter<"Orders"> | string
    customerName?: StringWithAggregatesFilter<"Orders"> | string
    date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    totalAmount?: FloatWithAggregatesFilter<"Orders"> | number
    status?: StringWithAggregatesFilter<"Orders"> | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    finishedGoodId?: StringFilter<"OrderItem"> | string
    quantity?: FloatFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    totalPrice?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    order?: OrdersOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    finishedGoodId?: StringFilter<"OrderItem"> | string
    quantity?: FloatFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    totalPrice?: FloatFilter<"OrderItem"> | number
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    finishedGoodId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: FloatWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderItem"> | number
    totalPrice?: FloatWithAggregatesFilter<"OrderItem"> | number
  }

  export type DeliveryNotesWhereInput = {
    AND?: DeliveryNotesWhereInput | DeliveryNotesWhereInput[]
    OR?: DeliveryNotesWhereInput[]
    NOT?: DeliveryNotesWhereInput | DeliveryNotesWhereInput[]
    id?: StringFilter<"DeliveryNotes"> | string
    orderId?: StringFilter<"DeliveryNotes"> | string
    customerName?: StringFilter<"DeliveryNotes"> | string
    date?: DateTimeFilter<"DeliveryNotes"> | Date | string
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
  }

  export type DeliveryNotesOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    order?: OrdersOrderByWithRelationInput
  }

  export type DeliveryNotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryNotesWhereInput | DeliveryNotesWhereInput[]
    OR?: DeliveryNotesWhereInput[]
    NOT?: DeliveryNotesWhereInput | DeliveryNotesWhereInput[]
    orderId?: StringFilter<"DeliveryNotes"> | string
    customerName?: StringFilter<"DeliveryNotes"> | string
    date?: DateTimeFilter<"DeliveryNotes"> | Date | string
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
  }, "id">

  export type DeliveryNotesOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    _count?: DeliveryNotesCountOrderByAggregateInput
    _max?: DeliveryNotesMaxOrderByAggregateInput
    _min?: DeliveryNotesMinOrderByAggregateInput
  }

  export type DeliveryNotesScalarWhereWithAggregatesInput = {
    AND?: DeliveryNotesScalarWhereWithAggregatesInput | DeliveryNotesScalarWhereWithAggregatesInput[]
    OR?: DeliveryNotesScalarWhereWithAggregatesInput[]
    NOT?: DeliveryNotesScalarWhereWithAggregatesInput | DeliveryNotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryNotes"> | string
    orderId?: StringWithAggregatesFilter<"DeliveryNotes"> | string
    customerName?: StringWithAggregatesFilter<"DeliveryNotes"> | string
    date?: DateTimeWithAggregatesFilter<"DeliveryNotes"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    orderId?: StringFilter<"Invoice"> | string
    customerName?: StringFilter<"Invoice"> | string
    date?: DateTimeFilter<"Invoice"> | Date | string
    totalAmount?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    order?: OrdersOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    orderId?: StringFilter<"Invoice"> | string
    customerName?: StringFilter<"Invoice"> | string
    date?: DateTimeFilter<"Invoice"> | Date | string
    totalAmount?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
    order?: XOR<OrdersRelationFilter, OrdersWhereInput>
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    orderId?: StringWithAggregatesFilter<"Invoice"> | string
    customerName?: StringWithAggregatesFilter<"Invoice"> | string
    date?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    totalAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    status?: StringWithAggregatesFilter<"Invoice"> | string
  }

  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    id?: StringFilter<"Sales"> | string
    finishedGoodId?: StringFilter<"Sales"> | string
    quantitySold?: FloatFilter<"Sales"> | number
    saleDate?: DateTimeFilter<"Sales"> | Date | string
    customerName?: StringFilter<"Sales"> | string
    totalPrice?: FloatFilter<"Sales"> | number
  }

  export type SalesOrderByWithRelationInput = {
    id?: SortOrder
    finishedGoodId?: SortOrder
    quantitySold?: SortOrder
    saleDate?: SortOrder
    customerName?: SortOrder
    totalPrice?: SortOrder
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    finishedGoodId?: StringFilter<"Sales"> | string
    quantitySold?: FloatFilter<"Sales"> | number
    saleDate?: DateTimeFilter<"Sales"> | Date | string
    customerName?: StringFilter<"Sales"> | string
    totalPrice?: FloatFilter<"Sales"> | number
  }, "id">

  export type SalesOrderByWithAggregationInput = {
    id?: SortOrder
    finishedGoodId?: SortOrder
    quantitySold?: SortOrder
    saleDate?: SortOrder
    customerName?: SortOrder
    totalPrice?: SortOrder
    _count?: SalesCountOrderByAggregateInput
    _avg?: SalesAvgOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
    _sum?: SalesSumOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sales"> | string
    finishedGoodId?: StringWithAggregatesFilter<"Sales"> | string
    quantitySold?: FloatWithAggregatesFilter<"Sales"> | number
    saleDate?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    customerName?: StringWithAggregatesFilter<"Sales"> | string
    totalPrice?: FloatWithAggregatesFilter<"Sales"> | number
  }

  export type PostCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    published?: boolean
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    hashedPassword: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    hashedPassword: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    hashedPassword: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialCreateInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
    stock?: StockCreateNestedManyWithoutMaterialInput
    usage?: UsageCreateNestedManyWithoutMaterialInput
    MaterialSupplier?: MaterialSupplierCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
    stock?: StockUncheckedCreateNestedManyWithoutMaterialInput
    usage?: UsageUncheckedCreateNestedManyWithoutMaterialInput
    MaterialSupplier?: MaterialSupplierUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    stock?: StockUpdateManyWithoutMaterialNestedInput
    usage?: UsageUpdateManyWithoutMaterialNestedInput
    MaterialSupplier?: MaterialSupplierUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    stock?: StockUncheckedUpdateManyWithoutMaterialNestedInput
    usage?: UsageUncheckedUpdateManyWithoutMaterialNestedInput
    MaterialSupplier?: MaterialSupplierUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    contactInfo?: string | null
    address?: string | null
    email: string
    phone: string
    materials?: MaterialSupplierCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    contactInfo?: string | null
    address?: string | null
    email: string
    phone: string
    materials?: MaterialSupplierUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    materials?: MaterialSupplierUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    materials?: MaterialSupplierUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    contactInfo?: string | null
    address?: string | null
    email: string
    phone: string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialSupplierCreateInput = {
    id?: string
    material: MaterialCreateNestedOneWithoutMaterialSupplierInput
    supplier: SupplierCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialSupplierUncheckedCreateInput = {
    id?: string
    materialId: string
    supplierId: string
  }

  export type MaterialSupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneRequiredWithoutMaterialSupplierNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialSupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialSupplierCreateManyInput = {
    id?: string
    materialId: string
    supplierId: string
  }

  export type MaterialSupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialSupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
  }

  export type StockCreateInput = {
    id?: string
    quantity: number
    location: string
    lastUpdated?: Date | string
    material: MaterialCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateInput = {
    id?: string
    materialId: string
    quantity: number
    location: string
    lastUpdated?: Date | string
  }

  export type StockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    material?: MaterialUpdateOneRequiredWithoutStockNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockCreateManyInput = {
    id?: string
    materialId: string
    quantity: number
    location: string
    lastUpdated?: Date | string
  }

  export type StockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageCreateInput = {
    id?: string
    quantityUsed: number
    dateUsed: Date | string
    batchNumber?: string | null
    material: MaterialCreateNestedOneWithoutUsageInput
  }

  export type UsageUncheckedCreateInput = {
    id?: string
    materialId: string
    quantityUsed: number
    dateUsed: Date | string
    batchNumber?: string | null
  }

  export type UsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: FloatFieldUpdateOperationsInput | number
    dateUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
    material?: MaterialUpdateOneRequiredWithoutUsageNestedInput
  }

  export type UsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: FloatFieldUpdateOperationsInput | number
    dateUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsageCreateManyInput = {
    id?: string
    materialId: string
    quantityUsed: number
    dateUsed: Date | string
    batchNumber?: string | null
  }

  export type UsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: FloatFieldUpdateOperationsInput | number
    dateUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
    quantityUsed?: FloatFieldUpdateOperationsInput | number
    dateUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinishedGoodsCreateInput = {
    id?: string
    batchNumber: string
    name: string
    description?: string | null
    unit: string
    pricePerUnit: number
    pricePerUnitFormatted: string
    color?: string | null
    finish?: string | null
    createdAt?: Date | string
  }

  export type FinishedGoodsUncheckedCreateInput = {
    id?: string
    batchNumber: string
    name: string
    description?: string | null
    unit: string
    pricePerUnit: number
    pricePerUnitFormatted: string
    color?: string | null
    finish?: string | null
    createdAt?: Date | string
  }

  export type FinishedGoodsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    pricePerUnitFormatted?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishedGoodsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    pricePerUnitFormatted?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishedGoodsCreateManyInput = {
    id?: string
    batchNumber: string
    name: string
    description?: string | null
    unit: string
    pricePerUnit: number
    pricePerUnitFormatted: string
    color?: string | null
    finish?: string | null
    createdAt?: Date | string
  }

  export type FinishedGoodsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    pricePerUnitFormatted?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishedGoodsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    pricePerUnit?: FloatFieldUpdateOperationsInput | number
    pricePerUnitFormatted?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    finish?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinishedGoodStockCreateInput = {
    id?: string
    finishedGoodsId: string
    quantity: number
    location: string
    lastUpdated?: Date | string
  }

  export type FinishedGoodStockUncheckedCreateInput = {
    id?: string
    finishedGoodsId: string
    quantity: number
    location: string
    lastUpdated?: Date | string
  }

  export type FinishedGoodStockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodsId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishedGoodStockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodsId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishedGoodStockCreateManyInput = {
    id?: string
    finishedGoodsId: string
    quantity: number
    location: string
    lastUpdated?: Date | string
  }

  export type FinishedGoodStockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodsId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishedGoodStockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodsId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationCreateInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    discount?: number | null
    vat?: number | null
    status?: string
    items?: QuotationItemCreateNestedManyWithoutQuotationInput
    orders?: OrdersCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    discount?: number | null
    vat?: number | null
    status?: string
    items?: QuotationItemUncheckedCreateNestedManyWithoutQuotationInput
    orders?: OrdersUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    vat?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    items?: QuotationItemUpdateManyWithoutQuotationNestedInput
    orders?: OrdersUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    vat?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    items?: QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationCreateManyInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    discount?: number | null
    vat?: number | null
    status?: string
  }

  export type QuotationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    vat?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type QuotationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    vat?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type QuotationItemCreateInput = {
    id?: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
    quotation: QuotationCreateNestedOneWithoutItemsInput
  }

  export type QuotationItemUncheckedCreateInput = {
    id?: string
    quotationId: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type QuotationItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quotation?: QuotationUpdateOneRequiredWithoutItemsNestedInput
  }

  export type QuotationItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type QuotationItemCreateManyInput = {
    id?: string
    quotationId: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type QuotationItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type QuotationItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    items?: OrderItemCreateNestedManyWithoutOrderInput
    invoices?: InvoiceCreateNestedManyWithoutOrderInput
    deliveryNotes?: DeliveryNotesCreateNestedManyWithoutOrderInput
    quotation: QuotationCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: string
    quotationId: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrderInput
    deliveryNotes?: DeliveryNotesUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    invoices?: InvoiceUpdateManyWithoutOrderNestedInput
    deliveryNotes?: DeliveryNotesUpdateManyWithoutOrderNestedInput
    quotation?: QuotationUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNotes?: DeliveryNotesUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: string
    quotationId: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateInput = {
    id?: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
    order: OrdersCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    order?: OrdersUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type DeliveryNotesCreateInput = {
    id?: string
    customerName: string
    date: Date | string
    order: OrdersCreateNestedOneWithoutDeliveryNotesInput
  }

  export type DeliveryNotesUncheckedCreateInput = {
    id?: string
    orderId: string
    customerName: string
    date: Date | string
  }

  export type DeliveryNotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutDeliveryNotesNestedInput
  }

  export type DeliveryNotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryNotesCreateManyInput = {
    id?: string
    orderId: string
    customerName: string
    date: Date | string
  }

  export type DeliveryNotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryNotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    order: OrdersCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    orderId: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    order?: OrdersUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    orderId: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SalesCreateInput = {
    id?: string
    finishedGoodId: string
    quantitySold: number
    saleDate: Date | string
    customerName: string
    totalPrice: number
  }

  export type SalesUncheckedCreateInput = {
    id?: string
    finishedGoodId: string
    quantitySold: number
    saleDate: Date | string
    customerName: string
    totalPrice: number
  }

  export type SalesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantitySold?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantitySold?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesCreateManyInput = {
    id?: string
    finishedGoodId: string
    quantitySold: number
    saleDate: Date | string
    customerName: string
    totalPrice: number
  }

  export type SalesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantitySold?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantitySold?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    customerName?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    published?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    hashedPassword?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StockListRelationFilter = {
    every?: StockWhereInput
    some?: StockWhereInput
    none?: StockWhereInput
  }

  export type UsageListRelationFilter = {
    every?: UsageWhereInput
    some?: UsageWhereInput
    none?: UsageWhereInput
  }

  export type MaterialSupplierListRelationFilter = {
    every?: MaterialSupplierWhereInput
    some?: MaterialSupplierWhereInput
    none?: MaterialSupplierWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialSupplierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    category?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    costPerUnit?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    category?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    costPerUnit?: SortOrder
    category?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    costPerUnit?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactInfo?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactInfo?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactInfo?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type MaterialRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type SupplierRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type MaterialSupplierCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    supplierId?: SortOrder
  }

  export type MaterialSupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    supplierId?: SortOrder
  }

  export type MaterialSupplierMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    supplierId?: SortOrder
  }

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
  }

  export type StockAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
  }

  export type StockSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type UsageCountOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantityUsed?: SortOrder
    dateUsed?: SortOrder
    batchNumber?: SortOrder
  }

  export type UsageAvgOrderByAggregateInput = {
    quantityUsed?: SortOrder
  }

  export type UsageMaxOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantityUsed?: SortOrder
    dateUsed?: SortOrder
    batchNumber?: SortOrder
  }

  export type UsageMinOrderByAggregateInput = {
    id?: SortOrder
    materialId?: SortOrder
    quantityUsed?: SortOrder
    dateUsed?: SortOrder
    batchNumber?: SortOrder
  }

  export type UsageSumOrderByAggregateInput = {
    quantityUsed?: SortOrder
  }

  export type FinishedGoodsCountOrderByAggregateInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrder
    pricePerUnitFormatted?: SortOrder
    color?: SortOrder
    finish?: SortOrder
    createdAt?: SortOrder
  }

  export type FinishedGoodsAvgOrderByAggregateInput = {
    pricePerUnit?: SortOrder
  }

  export type FinishedGoodsMaxOrderByAggregateInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrder
    pricePerUnitFormatted?: SortOrder
    color?: SortOrder
    finish?: SortOrder
    createdAt?: SortOrder
  }

  export type FinishedGoodsMinOrderByAggregateInput = {
    id?: SortOrder
    batchNumber?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    pricePerUnit?: SortOrder
    pricePerUnitFormatted?: SortOrder
    color?: SortOrder
    finish?: SortOrder
    createdAt?: SortOrder
  }

  export type FinishedGoodsSumOrderByAggregateInput = {
    pricePerUnit?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FinishedGoodStockCountOrderByAggregateInput = {
    id?: SortOrder
    finishedGoodsId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FinishedGoodStockAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FinishedGoodStockMaxOrderByAggregateInput = {
    id?: SortOrder
    finishedGoodsId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FinishedGoodStockMinOrderByAggregateInput = {
    id?: SortOrder
    finishedGoodsId?: SortOrder
    quantity?: SortOrder
    location?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FinishedGoodStockSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type QuotationItemListRelationFilter = {
    every?: QuotationItemWhereInput
    some?: QuotationItemWhereInput
    none?: QuotationItemWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type QuotationItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuotationCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    discount?: SortOrder
    vat?: SortOrder
    status?: SortOrder
  }

  export type QuotationAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    discount?: SortOrder
    vat?: SortOrder
  }

  export type QuotationMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    discount?: SortOrder
    vat?: SortOrder
    status?: SortOrder
  }

  export type QuotationMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    discount?: SortOrder
    vat?: SortOrder
    status?: SortOrder
  }

  export type QuotationSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    discount?: SortOrder
    vat?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type QuotationRelationFilter = {
    is?: QuotationWhereInput
    isNot?: QuotationWhereInput
  }

  export type QuotationItemCountOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type QuotationItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type QuotationItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type QuotationItemMinOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type QuotationItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type DeliveryNotesListRelationFilter = {
    every?: DeliveryNotesWhereInput
    some?: DeliveryNotesWhereInput
    none?: DeliveryNotesWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryNotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    quotationId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type OrdersRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    finishedGoodId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type DeliveryNotesCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
  }

  export type DeliveryNotesMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
  }

  export type DeliveryNotesMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerName?: SortOrder
    date?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type SalesCountOrderByAggregateInput = {
    id?: SortOrder
    finishedGoodId?: SortOrder
    quantitySold?: SortOrder
    saleDate?: SortOrder
    customerName?: SortOrder
    totalPrice?: SortOrder
  }

  export type SalesAvgOrderByAggregateInput = {
    quantitySold?: SortOrder
    totalPrice?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    id?: SortOrder
    finishedGoodId?: SortOrder
    quantitySold?: SortOrder
    saleDate?: SortOrder
    customerName?: SortOrder
    totalPrice?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    id?: SortOrder
    finishedGoodId?: SortOrder
    quantitySold?: SortOrder
    saleDate?: SortOrder
    customerName?: SortOrder
    totalPrice?: SortOrder
  }

  export type SalesSumOrderByAggregateInput = {
    quantitySold?: SortOrder
    totalPrice?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StockCreateNestedManyWithoutMaterialInput = {
    create?: XOR<StockCreateWithoutMaterialInput, StockUncheckedCreateWithoutMaterialInput> | StockCreateWithoutMaterialInput[] | StockUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMaterialInput | StockCreateOrConnectWithoutMaterialInput[]
    createMany?: StockCreateManyMaterialInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type UsageCreateNestedManyWithoutMaterialInput = {
    create?: XOR<UsageCreateWithoutMaterialInput, UsageUncheckedCreateWithoutMaterialInput> | UsageCreateWithoutMaterialInput[] | UsageUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: UsageCreateOrConnectWithoutMaterialInput | UsageCreateOrConnectWithoutMaterialInput[]
    createMany?: UsageCreateManyMaterialInputEnvelope
    connect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
  }

  export type MaterialSupplierCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialSupplierCreateWithoutMaterialInput, MaterialSupplierUncheckedCreateWithoutMaterialInput> | MaterialSupplierCreateWithoutMaterialInput[] | MaterialSupplierUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialSupplierCreateOrConnectWithoutMaterialInput | MaterialSupplierCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialSupplierCreateManyMaterialInputEnvelope
    connect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
  }

  export type StockUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<StockCreateWithoutMaterialInput, StockUncheckedCreateWithoutMaterialInput> | StockCreateWithoutMaterialInput[] | StockUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMaterialInput | StockCreateOrConnectWithoutMaterialInput[]
    createMany?: StockCreateManyMaterialInputEnvelope
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
  }

  export type UsageUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<UsageCreateWithoutMaterialInput, UsageUncheckedCreateWithoutMaterialInput> | UsageCreateWithoutMaterialInput[] | UsageUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: UsageCreateOrConnectWithoutMaterialInput | UsageCreateOrConnectWithoutMaterialInput[]
    createMany?: UsageCreateManyMaterialInputEnvelope
    connect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
  }

  export type MaterialSupplierUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialSupplierCreateWithoutMaterialInput, MaterialSupplierUncheckedCreateWithoutMaterialInput> | MaterialSupplierCreateWithoutMaterialInput[] | MaterialSupplierUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialSupplierCreateOrConnectWithoutMaterialInput | MaterialSupplierCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialSupplierCreateManyMaterialInputEnvelope
    connect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StockUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<StockCreateWithoutMaterialInput, StockUncheckedCreateWithoutMaterialInput> | StockCreateWithoutMaterialInput[] | StockUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMaterialInput | StockCreateOrConnectWithoutMaterialInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutMaterialInput | StockUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: StockCreateManyMaterialInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutMaterialInput | StockUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: StockUpdateManyWithWhereWithoutMaterialInput | StockUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type UsageUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<UsageCreateWithoutMaterialInput, UsageUncheckedCreateWithoutMaterialInput> | UsageCreateWithoutMaterialInput[] | UsageUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: UsageCreateOrConnectWithoutMaterialInput | UsageCreateOrConnectWithoutMaterialInput[]
    upsert?: UsageUpsertWithWhereUniqueWithoutMaterialInput | UsageUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: UsageCreateManyMaterialInputEnvelope
    set?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    disconnect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    delete?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    connect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    update?: UsageUpdateWithWhereUniqueWithoutMaterialInput | UsageUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: UsageUpdateManyWithWhereWithoutMaterialInput | UsageUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: UsageScalarWhereInput | UsageScalarWhereInput[]
  }

  export type MaterialSupplierUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialSupplierCreateWithoutMaterialInput, MaterialSupplierUncheckedCreateWithoutMaterialInput> | MaterialSupplierCreateWithoutMaterialInput[] | MaterialSupplierUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialSupplierCreateOrConnectWithoutMaterialInput | MaterialSupplierCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialSupplierUpsertWithWhereUniqueWithoutMaterialInput | MaterialSupplierUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialSupplierCreateManyMaterialInputEnvelope
    set?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    disconnect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    delete?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    connect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    update?: MaterialSupplierUpdateWithWhereUniqueWithoutMaterialInput | MaterialSupplierUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialSupplierUpdateManyWithWhereWithoutMaterialInput | MaterialSupplierUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialSupplierScalarWhereInput | MaterialSupplierScalarWhereInput[]
  }

  export type StockUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<StockCreateWithoutMaterialInput, StockUncheckedCreateWithoutMaterialInput> | StockCreateWithoutMaterialInput[] | StockUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: StockCreateOrConnectWithoutMaterialInput | StockCreateOrConnectWithoutMaterialInput[]
    upsert?: StockUpsertWithWhereUniqueWithoutMaterialInput | StockUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: StockCreateManyMaterialInputEnvelope
    set?: StockWhereUniqueInput | StockWhereUniqueInput[]
    disconnect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    delete?: StockWhereUniqueInput | StockWhereUniqueInput[]
    connect?: StockWhereUniqueInput | StockWhereUniqueInput[]
    update?: StockUpdateWithWhereUniqueWithoutMaterialInput | StockUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: StockUpdateManyWithWhereWithoutMaterialInput | StockUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: StockScalarWhereInput | StockScalarWhereInput[]
  }

  export type UsageUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<UsageCreateWithoutMaterialInput, UsageUncheckedCreateWithoutMaterialInput> | UsageCreateWithoutMaterialInput[] | UsageUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: UsageCreateOrConnectWithoutMaterialInput | UsageCreateOrConnectWithoutMaterialInput[]
    upsert?: UsageUpsertWithWhereUniqueWithoutMaterialInput | UsageUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: UsageCreateManyMaterialInputEnvelope
    set?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    disconnect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    delete?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    connect?: UsageWhereUniqueInput | UsageWhereUniqueInput[]
    update?: UsageUpdateWithWhereUniqueWithoutMaterialInput | UsageUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: UsageUpdateManyWithWhereWithoutMaterialInput | UsageUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: UsageScalarWhereInput | UsageScalarWhereInput[]
  }

  export type MaterialSupplierUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialSupplierCreateWithoutMaterialInput, MaterialSupplierUncheckedCreateWithoutMaterialInput> | MaterialSupplierCreateWithoutMaterialInput[] | MaterialSupplierUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialSupplierCreateOrConnectWithoutMaterialInput | MaterialSupplierCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialSupplierUpsertWithWhereUniqueWithoutMaterialInput | MaterialSupplierUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialSupplierCreateManyMaterialInputEnvelope
    set?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    disconnect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    delete?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    connect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    update?: MaterialSupplierUpdateWithWhereUniqueWithoutMaterialInput | MaterialSupplierUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialSupplierUpdateManyWithWhereWithoutMaterialInput | MaterialSupplierUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialSupplierScalarWhereInput | MaterialSupplierScalarWhereInput[]
  }

  export type MaterialSupplierCreateNestedManyWithoutSupplierInput = {
    create?: XOR<MaterialSupplierCreateWithoutSupplierInput, MaterialSupplierUncheckedCreateWithoutSupplierInput> | MaterialSupplierCreateWithoutSupplierInput[] | MaterialSupplierUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: MaterialSupplierCreateOrConnectWithoutSupplierInput | MaterialSupplierCreateOrConnectWithoutSupplierInput[]
    createMany?: MaterialSupplierCreateManySupplierInputEnvelope
    connect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
  }

  export type MaterialSupplierUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<MaterialSupplierCreateWithoutSupplierInput, MaterialSupplierUncheckedCreateWithoutSupplierInput> | MaterialSupplierCreateWithoutSupplierInput[] | MaterialSupplierUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: MaterialSupplierCreateOrConnectWithoutSupplierInput | MaterialSupplierCreateOrConnectWithoutSupplierInput[]
    createMany?: MaterialSupplierCreateManySupplierInputEnvelope
    connect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
  }

  export type MaterialSupplierUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<MaterialSupplierCreateWithoutSupplierInput, MaterialSupplierUncheckedCreateWithoutSupplierInput> | MaterialSupplierCreateWithoutSupplierInput[] | MaterialSupplierUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: MaterialSupplierCreateOrConnectWithoutSupplierInput | MaterialSupplierCreateOrConnectWithoutSupplierInput[]
    upsert?: MaterialSupplierUpsertWithWhereUniqueWithoutSupplierInput | MaterialSupplierUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: MaterialSupplierCreateManySupplierInputEnvelope
    set?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    disconnect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    delete?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    connect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    update?: MaterialSupplierUpdateWithWhereUniqueWithoutSupplierInput | MaterialSupplierUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: MaterialSupplierUpdateManyWithWhereWithoutSupplierInput | MaterialSupplierUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: MaterialSupplierScalarWhereInput | MaterialSupplierScalarWhereInput[]
  }

  export type MaterialSupplierUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<MaterialSupplierCreateWithoutSupplierInput, MaterialSupplierUncheckedCreateWithoutSupplierInput> | MaterialSupplierCreateWithoutSupplierInput[] | MaterialSupplierUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: MaterialSupplierCreateOrConnectWithoutSupplierInput | MaterialSupplierCreateOrConnectWithoutSupplierInput[]
    upsert?: MaterialSupplierUpsertWithWhereUniqueWithoutSupplierInput | MaterialSupplierUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: MaterialSupplierCreateManySupplierInputEnvelope
    set?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    disconnect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    delete?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    connect?: MaterialSupplierWhereUniqueInput | MaterialSupplierWhereUniqueInput[]
    update?: MaterialSupplierUpdateWithWhereUniqueWithoutSupplierInput | MaterialSupplierUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: MaterialSupplierUpdateManyWithWhereWithoutSupplierInput | MaterialSupplierUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: MaterialSupplierScalarWhereInput | MaterialSupplierScalarWhereInput[]
  }

  export type MaterialCreateNestedOneWithoutMaterialSupplierInput = {
    create?: XOR<MaterialCreateWithoutMaterialSupplierInput, MaterialUncheckedCreateWithoutMaterialSupplierInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutMaterialSupplierInput
    connect?: MaterialWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<SupplierCreateWithoutMaterialsInput, SupplierUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutMaterialsInput
    connect?: SupplierWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutMaterialSupplierNestedInput = {
    create?: XOR<MaterialCreateWithoutMaterialSupplierInput, MaterialUncheckedCreateWithoutMaterialSupplierInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutMaterialSupplierInput
    upsert?: MaterialUpsertWithoutMaterialSupplierInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutMaterialSupplierInput, MaterialUpdateWithoutMaterialSupplierInput>, MaterialUncheckedUpdateWithoutMaterialSupplierInput>
  }

  export type SupplierUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<SupplierCreateWithoutMaterialsInput, SupplierUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutMaterialsInput
    upsert?: SupplierUpsertWithoutMaterialsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutMaterialsInput, SupplierUpdateWithoutMaterialsInput>, SupplierUncheckedUpdateWithoutMaterialsInput>
  }

  export type MaterialCreateNestedOneWithoutStockInput = {
    create?: XOR<MaterialCreateWithoutStockInput, MaterialUncheckedCreateWithoutStockInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutStockInput
    connect?: MaterialWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<MaterialCreateWithoutStockInput, MaterialUncheckedCreateWithoutStockInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutStockInput
    upsert?: MaterialUpsertWithoutStockInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutStockInput, MaterialUpdateWithoutStockInput>, MaterialUncheckedUpdateWithoutStockInput>
  }

  export type MaterialCreateNestedOneWithoutUsageInput = {
    create?: XOR<MaterialCreateWithoutUsageInput, MaterialUncheckedCreateWithoutUsageInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutUsageInput
    connect?: MaterialWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutUsageNestedInput = {
    create?: XOR<MaterialCreateWithoutUsageInput, MaterialUncheckedCreateWithoutUsageInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutUsageInput
    upsert?: MaterialUpsertWithoutUsageInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutUsageInput, MaterialUpdateWithoutUsageInput>, MaterialUncheckedUpdateWithoutUsageInput>
  }

  export type QuotationItemCreateNestedManyWithoutQuotationInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutQuotationInput = {
    create?: XOR<OrdersCreateWithoutQuotationInput, OrdersUncheckedCreateWithoutQuotationInput> | OrdersCreateWithoutQuotationInput[] | OrdersUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutQuotationInput | OrdersCreateOrConnectWithoutQuotationInput[]
    createMany?: OrdersCreateManyQuotationInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type QuotationItemUncheckedCreateNestedManyWithoutQuotationInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutQuotationInput = {
    create?: XOR<OrdersCreateWithoutQuotationInput, OrdersUncheckedCreateWithoutQuotationInput> | OrdersCreateWithoutQuotationInput[] | OrdersUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutQuotationInput | OrdersCreateOrConnectWithoutQuotationInput[]
    createMany?: OrdersCreateManyQuotationInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuotationItemUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    upsert?: QuotationItemUpsertWithWhereUniqueWithoutQuotationInput | QuotationItemUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    set?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    disconnect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    delete?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    update?: QuotationItemUpdateWithWhereUniqueWithoutQuotationInput | QuotationItemUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: QuotationItemUpdateManyWithWhereWithoutQuotationInput | QuotationItemUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<OrdersCreateWithoutQuotationInput, OrdersUncheckedCreateWithoutQuotationInput> | OrdersCreateWithoutQuotationInput[] | OrdersUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutQuotationInput | OrdersCreateOrConnectWithoutQuotationInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutQuotationInput | OrdersUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: OrdersCreateManyQuotationInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutQuotationInput | OrdersUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutQuotationInput | OrdersUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput> | QuotationItemCreateWithoutQuotationInput[] | QuotationItemUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: QuotationItemCreateOrConnectWithoutQuotationInput | QuotationItemCreateOrConnectWithoutQuotationInput[]
    upsert?: QuotationItemUpsertWithWhereUniqueWithoutQuotationInput | QuotationItemUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: QuotationItemCreateManyQuotationInputEnvelope
    set?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    disconnect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    delete?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    connect?: QuotationItemWhereUniqueInput | QuotationItemWhereUniqueInput[]
    update?: QuotationItemUpdateWithWhereUniqueWithoutQuotationInput | QuotationItemUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: QuotationItemUpdateManyWithWhereWithoutQuotationInput | QuotationItemUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutQuotationNestedInput = {
    create?: XOR<OrdersCreateWithoutQuotationInput, OrdersUncheckedCreateWithoutQuotationInput> | OrdersCreateWithoutQuotationInput[] | OrdersUncheckedCreateWithoutQuotationInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutQuotationInput | OrdersCreateOrConnectWithoutQuotationInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutQuotationInput | OrdersUpsertWithWhereUniqueWithoutQuotationInput[]
    createMany?: OrdersCreateManyQuotationInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutQuotationInput | OrdersUpdateWithWhereUniqueWithoutQuotationInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutQuotationInput | OrdersUpdateManyWithWhereWithoutQuotationInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type QuotationCreateNestedOneWithoutItemsInput = {
    create?: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutItemsInput
    connect?: QuotationWhereUniqueInput
  }

  export type QuotationUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutItemsInput
    upsert?: QuotationUpsertWithoutItemsInput
    connect?: QuotationWhereUniqueInput
    update?: XOR<XOR<QuotationUpdateToOneWithWhereWithoutItemsInput, QuotationUpdateWithoutItemsInput>, QuotationUncheckedUpdateWithoutItemsInput>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutOrderInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput> | InvoiceCreateWithoutOrderInput[] | InvoiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput | InvoiceCreateOrConnectWithoutOrderInput[]
    createMany?: InvoiceCreateManyOrderInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type DeliveryNotesCreateNestedManyWithoutOrderInput = {
    create?: XOR<DeliveryNotesCreateWithoutOrderInput, DeliveryNotesUncheckedCreateWithoutOrderInput> | DeliveryNotesCreateWithoutOrderInput[] | DeliveryNotesUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DeliveryNotesCreateOrConnectWithoutOrderInput | DeliveryNotesCreateOrConnectWithoutOrderInput[]
    createMany?: DeliveryNotesCreateManyOrderInputEnvelope
    connect?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
  }

  export type QuotationCreateNestedOneWithoutOrdersInput = {
    create?: XOR<QuotationCreateWithoutOrdersInput, QuotationUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutOrdersInput
    connect?: QuotationWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput> | InvoiceCreateWithoutOrderInput[] | InvoiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput | InvoiceCreateOrConnectWithoutOrderInput[]
    createMany?: InvoiceCreateManyOrderInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type DeliveryNotesUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<DeliveryNotesCreateWithoutOrderInput, DeliveryNotesUncheckedCreateWithoutOrderInput> | DeliveryNotesCreateWithoutOrderInput[] | DeliveryNotesUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DeliveryNotesCreateOrConnectWithoutOrderInput | DeliveryNotesCreateOrConnectWithoutOrderInput[]
    createMany?: DeliveryNotesCreateManyOrderInputEnvelope
    connect?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutOrderNestedInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput> | InvoiceCreateWithoutOrderInput[] | InvoiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput | InvoiceCreateOrConnectWithoutOrderInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutOrderInput | InvoiceUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: InvoiceCreateManyOrderInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutOrderInput | InvoiceUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutOrderInput | InvoiceUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type DeliveryNotesUpdateManyWithoutOrderNestedInput = {
    create?: XOR<DeliveryNotesCreateWithoutOrderInput, DeliveryNotesUncheckedCreateWithoutOrderInput> | DeliveryNotesCreateWithoutOrderInput[] | DeliveryNotesUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DeliveryNotesCreateOrConnectWithoutOrderInput | DeliveryNotesCreateOrConnectWithoutOrderInput[]
    upsert?: DeliveryNotesUpsertWithWhereUniqueWithoutOrderInput | DeliveryNotesUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: DeliveryNotesCreateManyOrderInputEnvelope
    set?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
    disconnect?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
    delete?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
    connect?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
    update?: DeliveryNotesUpdateWithWhereUniqueWithoutOrderInput | DeliveryNotesUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: DeliveryNotesUpdateManyWithWhereWithoutOrderInput | DeliveryNotesUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: DeliveryNotesScalarWhereInput | DeliveryNotesScalarWhereInput[]
  }

  export type QuotationUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<QuotationCreateWithoutOrdersInput, QuotationUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: QuotationCreateOrConnectWithoutOrdersInput
    upsert?: QuotationUpsertWithoutOrdersInput
    connect?: QuotationWhereUniqueInput
    update?: XOR<XOR<QuotationUpdateToOneWithWhereWithoutOrdersInput, QuotationUpdateWithoutOrdersInput>, QuotationUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput> | InvoiceCreateWithoutOrderInput[] | InvoiceUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput | InvoiceCreateOrConnectWithoutOrderInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutOrderInput | InvoiceUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: InvoiceCreateManyOrderInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutOrderInput | InvoiceUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutOrderInput | InvoiceUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type DeliveryNotesUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<DeliveryNotesCreateWithoutOrderInput, DeliveryNotesUncheckedCreateWithoutOrderInput> | DeliveryNotesCreateWithoutOrderInput[] | DeliveryNotesUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: DeliveryNotesCreateOrConnectWithoutOrderInput | DeliveryNotesCreateOrConnectWithoutOrderInput[]
    upsert?: DeliveryNotesUpsertWithWhereUniqueWithoutOrderInput | DeliveryNotesUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: DeliveryNotesCreateManyOrderInputEnvelope
    set?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
    disconnect?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
    delete?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
    connect?: DeliveryNotesWhereUniqueInput | DeliveryNotesWhereUniqueInput[]
    update?: DeliveryNotesUpdateWithWhereUniqueWithoutOrderInput | DeliveryNotesUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: DeliveryNotesUpdateManyWithWhereWithoutOrderInput | DeliveryNotesUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: DeliveryNotesScalarWhereInput | DeliveryNotesScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutItemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutItemsInput
    upsert?: OrdersUpsertWithoutItemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutItemsInput, OrdersUpdateWithoutItemsInput>, OrdersUncheckedUpdateWithoutItemsInput>
  }

  export type OrdersCreateNestedOneWithoutDeliveryNotesInput = {
    create?: XOR<OrdersCreateWithoutDeliveryNotesInput, OrdersUncheckedCreateWithoutDeliveryNotesInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutDeliveryNotesInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutDeliveryNotesNestedInput = {
    create?: XOR<OrdersCreateWithoutDeliveryNotesInput, OrdersUncheckedCreateWithoutDeliveryNotesInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutDeliveryNotesInput
    upsert?: OrdersUpsertWithoutDeliveryNotesInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutDeliveryNotesInput, OrdersUpdateWithoutDeliveryNotesInput>, OrdersUncheckedUpdateWithoutDeliveryNotesInput>
  }

  export type OrdersCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<OrdersCreateWithoutInvoicesInput, OrdersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutInvoicesInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<OrdersCreateWithoutInvoicesInput, OrdersUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutInvoicesInput
    upsert?: OrdersUpsertWithoutInvoicesInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutInvoicesInput, OrdersUpdateWithoutInvoicesInput>, OrdersUncheckedUpdateWithoutInvoicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StockCreateWithoutMaterialInput = {
    id?: string
    quantity: number
    location: string
    lastUpdated?: Date | string
  }

  export type StockUncheckedCreateWithoutMaterialInput = {
    id?: string
    quantity: number
    location: string
    lastUpdated?: Date | string
  }

  export type StockCreateOrConnectWithoutMaterialInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutMaterialInput, StockUncheckedCreateWithoutMaterialInput>
  }

  export type StockCreateManyMaterialInputEnvelope = {
    data: StockCreateManyMaterialInput | StockCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type UsageCreateWithoutMaterialInput = {
    id?: string
    quantityUsed: number
    dateUsed: Date | string
    batchNumber?: string | null
  }

  export type UsageUncheckedCreateWithoutMaterialInput = {
    id?: string
    quantityUsed: number
    dateUsed: Date | string
    batchNumber?: string | null
  }

  export type UsageCreateOrConnectWithoutMaterialInput = {
    where: UsageWhereUniqueInput
    create: XOR<UsageCreateWithoutMaterialInput, UsageUncheckedCreateWithoutMaterialInput>
  }

  export type UsageCreateManyMaterialInputEnvelope = {
    data: UsageCreateManyMaterialInput | UsageCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MaterialSupplierCreateWithoutMaterialInput = {
    id?: string
    supplier: SupplierCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialSupplierUncheckedCreateWithoutMaterialInput = {
    id?: string
    supplierId: string
  }

  export type MaterialSupplierCreateOrConnectWithoutMaterialInput = {
    where: MaterialSupplierWhereUniqueInput
    create: XOR<MaterialSupplierCreateWithoutMaterialInput, MaterialSupplierUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialSupplierCreateManyMaterialInputEnvelope = {
    data: MaterialSupplierCreateManyMaterialInput | MaterialSupplierCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type StockUpsertWithWhereUniqueWithoutMaterialInput = {
    where: StockWhereUniqueInput
    update: XOR<StockUpdateWithoutMaterialInput, StockUncheckedUpdateWithoutMaterialInput>
    create: XOR<StockCreateWithoutMaterialInput, StockUncheckedCreateWithoutMaterialInput>
  }

  export type StockUpdateWithWhereUniqueWithoutMaterialInput = {
    where: StockWhereUniqueInput
    data: XOR<StockUpdateWithoutMaterialInput, StockUncheckedUpdateWithoutMaterialInput>
  }

  export type StockUpdateManyWithWhereWithoutMaterialInput = {
    where: StockScalarWhereInput
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyWithoutMaterialInput>
  }

  export type StockScalarWhereInput = {
    AND?: StockScalarWhereInput | StockScalarWhereInput[]
    OR?: StockScalarWhereInput[]
    NOT?: StockScalarWhereInput | StockScalarWhereInput[]
    id?: StringFilter<"Stock"> | string
    materialId?: StringFilter<"Stock"> | string
    quantity?: FloatFilter<"Stock"> | number
    location?: StringFilter<"Stock"> | string
    lastUpdated?: DateTimeFilter<"Stock"> | Date | string
  }

  export type UsageUpsertWithWhereUniqueWithoutMaterialInput = {
    where: UsageWhereUniqueInput
    update: XOR<UsageUpdateWithoutMaterialInput, UsageUncheckedUpdateWithoutMaterialInput>
    create: XOR<UsageCreateWithoutMaterialInput, UsageUncheckedCreateWithoutMaterialInput>
  }

  export type UsageUpdateWithWhereUniqueWithoutMaterialInput = {
    where: UsageWhereUniqueInput
    data: XOR<UsageUpdateWithoutMaterialInput, UsageUncheckedUpdateWithoutMaterialInput>
  }

  export type UsageUpdateManyWithWhereWithoutMaterialInput = {
    where: UsageScalarWhereInput
    data: XOR<UsageUpdateManyMutationInput, UsageUncheckedUpdateManyWithoutMaterialInput>
  }

  export type UsageScalarWhereInput = {
    AND?: UsageScalarWhereInput | UsageScalarWhereInput[]
    OR?: UsageScalarWhereInput[]
    NOT?: UsageScalarWhereInput | UsageScalarWhereInput[]
    id?: StringFilter<"Usage"> | string
    materialId?: StringFilter<"Usage"> | string
    quantityUsed?: FloatFilter<"Usage"> | number
    dateUsed?: DateTimeFilter<"Usage"> | Date | string
    batchNumber?: StringNullableFilter<"Usage"> | string | null
  }

  export type MaterialSupplierUpsertWithWhereUniqueWithoutMaterialInput = {
    where: MaterialSupplierWhereUniqueInput
    update: XOR<MaterialSupplierUpdateWithoutMaterialInput, MaterialSupplierUncheckedUpdateWithoutMaterialInput>
    create: XOR<MaterialSupplierCreateWithoutMaterialInput, MaterialSupplierUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialSupplierUpdateWithWhereUniqueWithoutMaterialInput = {
    where: MaterialSupplierWhereUniqueInput
    data: XOR<MaterialSupplierUpdateWithoutMaterialInput, MaterialSupplierUncheckedUpdateWithoutMaterialInput>
  }

  export type MaterialSupplierUpdateManyWithWhereWithoutMaterialInput = {
    where: MaterialSupplierScalarWhereInput
    data: XOR<MaterialSupplierUpdateManyMutationInput, MaterialSupplierUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MaterialSupplierScalarWhereInput = {
    AND?: MaterialSupplierScalarWhereInput | MaterialSupplierScalarWhereInput[]
    OR?: MaterialSupplierScalarWhereInput[]
    NOT?: MaterialSupplierScalarWhereInput | MaterialSupplierScalarWhereInput[]
    id?: StringFilter<"MaterialSupplier"> | string
    materialId?: StringFilter<"MaterialSupplier"> | string
    supplierId?: StringFilter<"MaterialSupplier"> | string
  }

  export type MaterialSupplierCreateWithoutSupplierInput = {
    id?: string
    material: MaterialCreateNestedOneWithoutMaterialSupplierInput
  }

  export type MaterialSupplierUncheckedCreateWithoutSupplierInput = {
    id?: string
    materialId: string
  }

  export type MaterialSupplierCreateOrConnectWithoutSupplierInput = {
    where: MaterialSupplierWhereUniqueInput
    create: XOR<MaterialSupplierCreateWithoutSupplierInput, MaterialSupplierUncheckedCreateWithoutSupplierInput>
  }

  export type MaterialSupplierCreateManySupplierInputEnvelope = {
    data: MaterialSupplierCreateManySupplierInput | MaterialSupplierCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type MaterialSupplierUpsertWithWhereUniqueWithoutSupplierInput = {
    where: MaterialSupplierWhereUniqueInput
    update: XOR<MaterialSupplierUpdateWithoutSupplierInput, MaterialSupplierUncheckedUpdateWithoutSupplierInput>
    create: XOR<MaterialSupplierCreateWithoutSupplierInput, MaterialSupplierUncheckedCreateWithoutSupplierInput>
  }

  export type MaterialSupplierUpdateWithWhereUniqueWithoutSupplierInput = {
    where: MaterialSupplierWhereUniqueInput
    data: XOR<MaterialSupplierUpdateWithoutSupplierInput, MaterialSupplierUncheckedUpdateWithoutSupplierInput>
  }

  export type MaterialSupplierUpdateManyWithWhereWithoutSupplierInput = {
    where: MaterialSupplierScalarWhereInput
    data: XOR<MaterialSupplierUpdateManyMutationInput, MaterialSupplierUncheckedUpdateManyWithoutSupplierInput>
  }

  export type MaterialCreateWithoutMaterialSupplierInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
    stock?: StockCreateNestedManyWithoutMaterialInput
    usage?: UsageCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutMaterialSupplierInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
    stock?: StockUncheckedCreateNestedManyWithoutMaterialInput
    usage?: UsageUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutMaterialSupplierInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutMaterialSupplierInput, MaterialUncheckedCreateWithoutMaterialSupplierInput>
  }

  export type SupplierCreateWithoutMaterialsInput = {
    id?: string
    name: string
    contactInfo?: string | null
    address?: string | null
    email: string
    phone: string
  }

  export type SupplierUncheckedCreateWithoutMaterialsInput = {
    id?: string
    name: string
    contactInfo?: string | null
    address?: string | null
    email: string
    phone: string
  }

  export type SupplierCreateOrConnectWithoutMaterialsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutMaterialsInput, SupplierUncheckedCreateWithoutMaterialsInput>
  }

  export type MaterialUpsertWithoutMaterialSupplierInput = {
    update: XOR<MaterialUpdateWithoutMaterialSupplierInput, MaterialUncheckedUpdateWithoutMaterialSupplierInput>
    create: XOR<MaterialCreateWithoutMaterialSupplierInput, MaterialUncheckedCreateWithoutMaterialSupplierInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutMaterialSupplierInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutMaterialSupplierInput, MaterialUncheckedUpdateWithoutMaterialSupplierInput>
  }

  export type MaterialUpdateWithoutMaterialSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    stock?: StockUpdateManyWithoutMaterialNestedInput
    usage?: UsageUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutMaterialSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    stock?: StockUncheckedUpdateManyWithoutMaterialNestedInput
    usage?: UsageUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type SupplierUpsertWithoutMaterialsInput = {
    update: XOR<SupplierUpdateWithoutMaterialsInput, SupplierUncheckedUpdateWithoutMaterialsInput>
    create: XOR<SupplierCreateWithoutMaterialsInput, SupplierUncheckedCreateWithoutMaterialsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutMaterialsInput, SupplierUncheckedUpdateWithoutMaterialsInput>
  }

  export type SupplierUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialCreateWithoutStockInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
    usage?: UsageCreateNestedManyWithoutMaterialInput
    MaterialSupplier?: MaterialSupplierCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutStockInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
    usage?: UsageUncheckedCreateNestedManyWithoutMaterialInput
    MaterialSupplier?: MaterialSupplierUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutStockInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutStockInput, MaterialUncheckedCreateWithoutStockInput>
  }

  export type MaterialUpsertWithoutStockInput = {
    update: XOR<MaterialUpdateWithoutStockInput, MaterialUncheckedUpdateWithoutStockInput>
    create: XOR<MaterialCreateWithoutStockInput, MaterialUncheckedCreateWithoutStockInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutStockInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutStockInput, MaterialUncheckedUpdateWithoutStockInput>
  }

  export type MaterialUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    usage?: UsageUpdateManyWithoutMaterialNestedInput
    MaterialSupplier?: MaterialSupplierUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    usage?: UsageUncheckedUpdateManyWithoutMaterialNestedInput
    MaterialSupplier?: MaterialSupplierUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateWithoutUsageInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
    stock?: StockCreateNestedManyWithoutMaterialInput
    MaterialSupplier?: MaterialSupplierCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutUsageInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    costPerUnit: number
    category: string
    stock?: StockUncheckedCreateNestedManyWithoutMaterialInput
    MaterialSupplier?: MaterialSupplierUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutUsageInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutUsageInput, MaterialUncheckedCreateWithoutUsageInput>
  }

  export type MaterialUpsertWithoutUsageInput = {
    update: XOR<MaterialUpdateWithoutUsageInput, MaterialUncheckedUpdateWithoutUsageInput>
    create: XOR<MaterialCreateWithoutUsageInput, MaterialUncheckedCreateWithoutUsageInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutUsageInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutUsageInput, MaterialUncheckedUpdateWithoutUsageInput>
  }

  export type MaterialUpdateWithoutUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    stock?: StockUpdateManyWithoutMaterialNestedInput
    MaterialSupplier?: MaterialSupplierUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    costPerUnit?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    stock?: StockUncheckedUpdateManyWithoutMaterialNestedInput
    MaterialSupplier?: MaterialSupplierUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type QuotationItemCreateWithoutQuotationInput = {
    id?: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type QuotationItemUncheckedCreateWithoutQuotationInput = {
    id?: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type QuotationItemCreateOrConnectWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    create: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput>
  }

  export type QuotationItemCreateManyQuotationInputEnvelope = {
    data: QuotationItemCreateManyQuotationInput | QuotationItemCreateManyQuotationInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutQuotationInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    items?: OrderItemCreateNestedManyWithoutOrderInput
    invoices?: InvoiceCreateNestedManyWithoutOrderInput
    deliveryNotes?: DeliveryNotesCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutQuotationInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrderInput
    deliveryNotes?: DeliveryNotesUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutQuotationInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutQuotationInput, OrdersUncheckedCreateWithoutQuotationInput>
  }

  export type OrdersCreateManyQuotationInputEnvelope = {
    data: OrdersCreateManyQuotationInput | OrdersCreateManyQuotationInput[]
    skipDuplicates?: boolean
  }

  export type QuotationItemUpsertWithWhereUniqueWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    update: XOR<QuotationItemUpdateWithoutQuotationInput, QuotationItemUncheckedUpdateWithoutQuotationInput>
    create: XOR<QuotationItemCreateWithoutQuotationInput, QuotationItemUncheckedCreateWithoutQuotationInput>
  }

  export type QuotationItemUpdateWithWhereUniqueWithoutQuotationInput = {
    where: QuotationItemWhereUniqueInput
    data: XOR<QuotationItemUpdateWithoutQuotationInput, QuotationItemUncheckedUpdateWithoutQuotationInput>
  }

  export type QuotationItemUpdateManyWithWhereWithoutQuotationInput = {
    where: QuotationItemScalarWhereInput
    data: XOR<QuotationItemUpdateManyMutationInput, QuotationItemUncheckedUpdateManyWithoutQuotationInput>
  }

  export type QuotationItemScalarWhereInput = {
    AND?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
    OR?: QuotationItemScalarWhereInput[]
    NOT?: QuotationItemScalarWhereInput | QuotationItemScalarWhereInput[]
    id?: StringFilter<"QuotationItem"> | string
    quotationId?: StringFilter<"QuotationItem"> | string
    finishedGoodId?: StringFilter<"QuotationItem"> | string
    quantity?: FloatFilter<"QuotationItem"> | number
    unitPrice?: FloatFilter<"QuotationItem"> | number
    totalPrice?: FloatFilter<"QuotationItem"> | number
  }

  export type OrdersUpsertWithWhereUniqueWithoutQuotationInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutQuotationInput, OrdersUncheckedUpdateWithoutQuotationInput>
    create: XOR<OrdersCreateWithoutQuotationInput, OrdersUncheckedCreateWithoutQuotationInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutQuotationInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutQuotationInput, OrdersUncheckedUpdateWithoutQuotationInput>
  }

  export type OrdersUpdateManyWithWhereWithoutQuotationInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutQuotationInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: StringFilter<"Orders"> | string
    quotationId?: StringFilter<"Orders"> | string
    customerName?: StringFilter<"Orders"> | string
    date?: DateTimeFilter<"Orders"> | Date | string
    totalAmount?: FloatFilter<"Orders"> | number
    status?: StringFilter<"Orders"> | string
  }

  export type QuotationCreateWithoutItemsInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    discount?: number | null
    vat?: number | null
    status?: string
    orders?: OrdersCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateWithoutItemsInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    discount?: number | null
    vat?: number | null
    status?: string
    orders?: OrdersUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationCreateOrConnectWithoutItemsInput = {
    where: QuotationWhereUniqueInput
    create: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
  }

  export type QuotationUpsertWithoutItemsInput = {
    update: XOR<QuotationUpdateWithoutItemsInput, QuotationUncheckedUpdateWithoutItemsInput>
    create: XOR<QuotationCreateWithoutItemsInput, QuotationUncheckedCreateWithoutItemsInput>
    where?: QuotationWhereInput
  }

  export type QuotationUpdateToOneWithWhereWithoutItemsInput = {
    where?: QuotationWhereInput
    data: XOR<QuotationUpdateWithoutItemsInput, QuotationUncheckedUpdateWithoutItemsInput>
  }

  export type QuotationUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    vat?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    vat?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutOrderInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
  }

  export type InvoiceUncheckedCreateWithoutOrderInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
  }

  export type InvoiceCreateOrConnectWithoutOrderInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
  }

  export type InvoiceCreateManyOrderInputEnvelope = {
    data: InvoiceCreateManyOrderInput | InvoiceCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryNotesCreateWithoutOrderInput = {
    id?: string
    customerName: string
    date: Date | string
  }

  export type DeliveryNotesUncheckedCreateWithoutOrderInput = {
    id?: string
    customerName: string
    date: Date | string
  }

  export type DeliveryNotesCreateOrConnectWithoutOrderInput = {
    where: DeliveryNotesWhereUniqueInput
    create: XOR<DeliveryNotesCreateWithoutOrderInput, DeliveryNotesUncheckedCreateWithoutOrderInput>
  }

  export type DeliveryNotesCreateManyOrderInputEnvelope = {
    data: DeliveryNotesCreateManyOrderInput | DeliveryNotesCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type QuotationCreateWithoutOrdersInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    discount?: number | null
    vat?: number | null
    status?: string
    items?: QuotationItemCreateNestedManyWithoutQuotationInput
  }

  export type QuotationUncheckedCreateWithoutOrdersInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    discount?: number | null
    vat?: number | null
    status?: string
    items?: QuotationItemUncheckedCreateNestedManyWithoutQuotationInput
  }

  export type QuotationCreateOrConnectWithoutOrdersInput = {
    where: QuotationWhereUniqueInput
    create: XOR<QuotationCreateWithoutOrdersInput, QuotationUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    finishedGoodId?: StringFilter<"OrderItem"> | string
    quantity?: FloatFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    totalPrice?: FloatFilter<"OrderItem"> | number
  }

  export type InvoiceUpsertWithWhereUniqueWithoutOrderInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutOrderInput, InvoiceUncheckedUpdateWithoutOrderInput>
    create: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutOrderInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutOrderInput, InvoiceUncheckedUpdateWithoutOrderInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutOrderInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutOrderInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    orderId?: StringFilter<"Invoice"> | string
    customerName?: StringFilter<"Invoice"> | string
    date?: DateTimeFilter<"Invoice"> | Date | string
    totalAmount?: FloatFilter<"Invoice"> | number
    status?: StringFilter<"Invoice"> | string
  }

  export type DeliveryNotesUpsertWithWhereUniqueWithoutOrderInput = {
    where: DeliveryNotesWhereUniqueInput
    update: XOR<DeliveryNotesUpdateWithoutOrderInput, DeliveryNotesUncheckedUpdateWithoutOrderInput>
    create: XOR<DeliveryNotesCreateWithoutOrderInput, DeliveryNotesUncheckedCreateWithoutOrderInput>
  }

  export type DeliveryNotesUpdateWithWhereUniqueWithoutOrderInput = {
    where: DeliveryNotesWhereUniqueInput
    data: XOR<DeliveryNotesUpdateWithoutOrderInput, DeliveryNotesUncheckedUpdateWithoutOrderInput>
  }

  export type DeliveryNotesUpdateManyWithWhereWithoutOrderInput = {
    where: DeliveryNotesScalarWhereInput
    data: XOR<DeliveryNotesUpdateManyMutationInput, DeliveryNotesUncheckedUpdateManyWithoutOrderInput>
  }

  export type DeliveryNotesScalarWhereInput = {
    AND?: DeliveryNotesScalarWhereInput | DeliveryNotesScalarWhereInput[]
    OR?: DeliveryNotesScalarWhereInput[]
    NOT?: DeliveryNotesScalarWhereInput | DeliveryNotesScalarWhereInput[]
    id?: StringFilter<"DeliveryNotes"> | string
    orderId?: StringFilter<"DeliveryNotes"> | string
    customerName?: StringFilter<"DeliveryNotes"> | string
    date?: DateTimeFilter<"DeliveryNotes"> | Date | string
  }

  export type QuotationUpsertWithoutOrdersInput = {
    update: XOR<QuotationUpdateWithoutOrdersInput, QuotationUncheckedUpdateWithoutOrdersInput>
    create: XOR<QuotationCreateWithoutOrdersInput, QuotationUncheckedCreateWithoutOrdersInput>
    where?: QuotationWhereInput
  }

  export type QuotationUpdateToOneWithWhereWithoutOrdersInput = {
    where?: QuotationWhereInput
    data: XOR<QuotationUpdateWithoutOrdersInput, QuotationUncheckedUpdateWithoutOrdersInput>
  }

  export type QuotationUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    vat?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    items?: QuotationItemUpdateManyWithoutQuotationNestedInput
  }

  export type QuotationUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    vat?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    items?: QuotationItemUncheckedUpdateManyWithoutQuotationNestedInput
  }

  export type OrdersCreateWithoutItemsInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    invoices?: InvoiceCreateNestedManyWithoutOrderInput
    deliveryNotes?: DeliveryNotesCreateNestedManyWithoutOrderInput
    quotation: QuotationCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutItemsInput = {
    id?: string
    quotationId: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrderInput
    deliveryNotes?: DeliveryNotesUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutItemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
  }

  export type OrdersUpsertWithoutItemsInput = {
    update: XOR<OrdersUpdateWithoutItemsInput, OrdersUncheckedUpdateWithoutItemsInput>
    create: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutItemsInput, OrdersUncheckedUpdateWithoutItemsInput>
  }

  export type OrdersUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    invoices?: InvoiceUpdateManyWithoutOrderNestedInput
    deliveryNotes?: DeliveryNotesUpdateManyWithoutOrderNestedInput
    quotation?: QuotationUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    invoices?: InvoiceUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNotes?: DeliveryNotesUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateWithoutDeliveryNotesInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    items?: OrderItemCreateNestedManyWithoutOrderInput
    invoices?: InvoiceCreateNestedManyWithoutOrderInput
    quotation: QuotationCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutDeliveryNotesInput = {
    id?: string
    quotationId: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutDeliveryNotesInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutDeliveryNotesInput, OrdersUncheckedCreateWithoutDeliveryNotesInput>
  }

  export type OrdersUpsertWithoutDeliveryNotesInput = {
    update: XOR<OrdersUpdateWithoutDeliveryNotesInput, OrdersUncheckedUpdateWithoutDeliveryNotesInput>
    create: XOR<OrdersCreateWithoutDeliveryNotesInput, OrdersUncheckedCreateWithoutDeliveryNotesInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutDeliveryNotesInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutDeliveryNotesInput, OrdersUncheckedUpdateWithoutDeliveryNotesInput>
  }

  export type OrdersUpdateWithoutDeliveryNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    invoices?: InvoiceUpdateManyWithoutOrderNestedInput
    quotation?: QuotationUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutDeliveryNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateWithoutInvoicesInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    items?: OrderItemCreateNestedManyWithoutOrderInput
    deliveryNotes?: DeliveryNotesCreateNestedManyWithoutOrderInput
    quotation: QuotationCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutInvoicesInput = {
    id?: string
    quotationId: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    deliveryNotes?: DeliveryNotesUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutInvoicesInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutInvoicesInput, OrdersUncheckedCreateWithoutInvoicesInput>
  }

  export type OrdersUpsertWithoutInvoicesInput = {
    update: XOR<OrdersUpdateWithoutInvoicesInput, OrdersUncheckedUpdateWithoutInvoicesInput>
    create: XOR<OrdersCreateWithoutInvoicesInput, OrdersUncheckedCreateWithoutInvoicesInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutInvoicesInput, OrdersUncheckedUpdateWithoutInvoicesInput>
  }

  export type OrdersUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    deliveryNotes?: DeliveryNotesUpdateManyWithoutOrderNestedInput
    quotation?: QuotationUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    quotationId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNotes?: DeliveryNotesUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type StockCreateManyMaterialInput = {
    id?: string
    quantity: number
    location: string
    lastUpdated?: Date | string
  }

  export type UsageCreateManyMaterialInput = {
    id?: string
    quantityUsed: number
    dateUsed: Date | string
    batchNumber?: string | null
  }

  export type MaterialSupplierCreateManyMaterialInput = {
    id?: string
    supplierId: string
  }

  export type StockUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: FloatFieldUpdateOperationsInput | number
    dateUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsageUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: FloatFieldUpdateOperationsInput | number
    dateUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsageUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityUsed?: FloatFieldUpdateOperationsInput | number
    dateUsed?: DateTimeFieldUpdateOperationsInput | Date | string
    batchNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaterialSupplierUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: SupplierUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialSupplierUncheckedUpdateWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialSupplierUncheckedUpdateManyWithoutMaterialInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialSupplierCreateManySupplierInput = {
    id?: string
    materialId: string
  }

  export type MaterialSupplierUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    material?: MaterialUpdateOneRequiredWithoutMaterialSupplierNestedInput
  }

  export type MaterialSupplierUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialSupplierUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    materialId?: StringFieldUpdateOperationsInput | string
  }

  export type QuotationItemCreateManyQuotationInput = {
    id?: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type OrdersCreateManyQuotationInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
  }

  export type QuotationItemUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type QuotationItemUncheckedUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type QuotationItemUncheckedUpdateManyWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    invoices?: InvoiceUpdateManyWithoutOrderNestedInput
    deliveryNotes?: DeliveryNotesUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNotes?: DeliveryNotesUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutQuotationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    finishedGoodId: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }

  export type InvoiceCreateManyOrderInput = {
    id?: string
    customerName: string
    date: Date | string
    totalAmount: number
    status?: string
  }

  export type DeliveryNotesCreateManyOrderInput = {
    id?: string
    customerName: string
    date: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    finishedGoodId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveryNotesUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryNotesUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryNotesUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MaterialCountOutputTypeDefaultArgs instead
     */
    export type MaterialCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaterialCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierCountOutputTypeDefaultArgs instead
     */
    export type SupplierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuotationCountOutputTypeDefaultArgs instead
     */
    export type QuotationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuotationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersCountOutputTypeDefaultArgs instead
     */
    export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaterialDefaultArgs instead
     */
    export type MaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaterialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierDefaultArgs instead
     */
    export type SupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaterialSupplierDefaultArgs instead
     */
    export type MaterialSupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaterialSupplierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockDefaultArgs instead
     */
    export type StockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsageDefaultArgs instead
     */
    export type UsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinishedGoodsDefaultArgs instead
     */
    export type FinishedGoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinishedGoodsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinishedGoodStockDefaultArgs instead
     */
    export type FinishedGoodStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinishedGoodStockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuotationDefaultArgs instead
     */
    export type QuotationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuotationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuotationItemDefaultArgs instead
     */
    export type QuotationItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuotationItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersDefaultArgs instead
     */
    export type OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeliveryNotesDefaultArgs instead
     */
    export type DeliveryNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeliveryNotesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesDefaultArgs instead
     */
    export type SalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}