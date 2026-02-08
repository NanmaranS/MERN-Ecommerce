import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({ msg: "Login required" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()

  } catch (err) {
    res.status(401).json({ msg: "Invalid or expired token" })
  }
}

export default authMiddleware
