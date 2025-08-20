from shared.ids import UserId, ProductId
from features.memberships.application.use_cases import JoinProductUseCase, LeaveProductUseCase
from features.memberships.application.ports import MembershipRepositoryPort

class MembershipController:
    def __init__(self, join_uc: JoinProductUseCase, leave_uc: LeaveProductUseCase, repo: MembershipRepositoryPort):
        self.join_uc = join_uc
        self.leave_uc = leave_uc
        self.repo = repo

    def join(self, user_id: str, product_id: str):
        if not user_id or not product_id:
            raise ValueError("user_id y product_id son requeridos")
        self.join_uc.execute(user_id, product_id)
        return {"status": "ok"}

    def leave(self, user_id: str, product_id: str):
        if not user_id or not product_id:
            raise ValueError("user_id y product_id son requeridos")
        self.leave_uc.execute(user_id, product_id)
        return {"status": "ok"}

    def list_by_user(self, user_id: str):
        mids = self.repo.list_by_user(UserId(user_id))
        return [{"user_id": m.user_id.value, "product_id": m.product_id.value, "joined_at": m.joined_at.isoformat()} for m in mids]
