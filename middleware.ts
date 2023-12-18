export { default } from 'next-auth/middleware'
// import middleware from 'next-auth/middleware'
// export default middleware

/**
 * @example
 * next.js middleware 配置 名称必须是 config
 */
export const config = {
	// *: 0个或多个路径
	// +: 1个或多个路径
	// ?: 0个或1个路径
	matcher: ['/users'],
}
