import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

router.get('/:id', skillsCtrl.show)

router.get('/:id/edit', skillsCtrl.edit)

router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)

router.put('/:id', skillsCtrl.update)


export {
  router
}
