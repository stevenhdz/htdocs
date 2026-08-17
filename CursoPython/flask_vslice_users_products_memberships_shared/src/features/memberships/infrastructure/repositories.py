from typing import Dict, Tuple, Optional, List
from shared.ids import UserId, ProductId
from features.memberships.application.ports import MembershipRepositoryPort
from features.memberships.domain.entities import Membership

class InMemoryMembershipRepository(MembershipRepositoryPort):
    def __init__(self):
        self._db: Dict[Tuple[str,str], Membership] = {}

    def _key(self, u: UserId, p: ProductId): return (u.value, p.value)

    def get(self, u: UserId, p: ProductId) -> Optional[Membership]:
        return self._db.get(self._key(u,p))

    def add(self, m: Membership) -> None:
        self._db[self._key(m.user_id, m.product_id)] = m

    def remove(self, u: UserId, p: ProductId) -> None:
        self._db.pop(self._key(u,p), None)

    def list_by_user(self, u: UserId) -> List[Membership]:
        return [m for (uid, _), m in self._db.items() if uid == u.value]
