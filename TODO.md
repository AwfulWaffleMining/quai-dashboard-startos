# TODO — quai-dashboard-startos

Worked top to bottom. Each item states what is unknown or wrong, why it matters, and what
would prove it done.

Changes ship as a pull request into `Start9-Community/quai-dashboard-startos`. Always
`git fetch s9 && git merge --ff-only s9/main` before branching — a PR cut from an unsynced
copy reverts the community review.

Note the dependency direction: `package.json` resolves the node from
`github:Start9-Community/go-quai-startos#next`. A dashboard change that needs a new export
from the node's `utils.ts` must land there first.

---

## 1. Install the dashboard with the node never installed

Every test so far started from a working node. Node **stopped** and node **not yet synced**
are both covered. Node **never installed** is not, and that is the path Start9's review
raised a crash-loop concern about. The audit shipped a crash-loop fix, so the behaviour now
is unverified in both directions — it may be fine, and nobody has looked.

**Done when:** a fresh StartOS install of the dashboard alone, with `go-quai-startos` absent
from the system entirely, either starts and reports the missing dependency cleanly or refuses
to start with a legible message. Not a restart loop, and not a blank `/dash/summary`.

## 2. Pending workshares are counted in the wrong place, and orphans never leave

Two related defects in the same panel:

- The pending count renders on the **No lock** card, which reads as "2 shares minted at no
  lock". It belongs in the **BY LOCK PERIOD** header, above the cards — the count spans every
  tier, it is not a property of one. Today a fresh install showing `2` next to `0 minted` in
  the APY section looks like two panels disagreeing about the same number, because in effect
  they are: one counts pending, the other counts minted, and nothing says so.
- When a workshare **orphans**, it stays in the pending count. Pending should mean "still
  might mint". An orphan cannot, so it must decrement. Observed directly: two pending
  workshares later went orphaned and the pending count did not move.

**Done when:** the header carries a count that spans all tiers and is explicitly labelled
pending, no card implies minted shares it does not have, and an orphan decrements the
pending total.

## 3. "How close shares get" — the second bucket dominates on every install

On every fresh install the second bar towers over the rest and the others sit near zero. A
distribution of share difficulty against network difficulty should not look identical across
unrelated installs, which points at the bucketing rather than at the data — a boundary
condition, or a first bucket so narrow that nearly everything falls into the second.

Worth checking against the raw values before changing the chart: dump the share difficulties
the panel is bucketing and confirm where the edges fall. If the edges are right and the shape
is real, say so in the panel so it stops reading as a bug.

**Done when:** either the bucket edges are corrected, or the panel explains why that shape is
expected.

## 4. Report upstream: Start is enabled while the dependency is unmet

On a fresh install the green Start button is clickable before `go-quai-startos` is satisfied,
and the confirmed-rewards task can be answered in that state — where answering it does not
flip the node's flag, because there is no node to flip. The dependency reappears on a page
refresh, so the setting does get applied eventually, and nothing is permanently wrong.

This is plausibly StartOS platform behaviour rather than a package defect, which is why it is
a report rather than a fix. Raise it with Start9 and record their answer here.

**Done when:** Start9 has confirmed whether a package can gate its own start on an unmet
dependency, and this file says which.

## 5. Attribute KawPoW workshares (blocked on the node)

KawPoW has never produced a workshare, so the dashboard's attribution for it has never run.
Once the node side is proven, verify KawPoW shares land in the right algo bucket rather than
silently into another or nowhere — and note that after this week's experience, "nowhere" will
look like an orphan.

**Done when:** a KawPoW workshare appears under KawPoW, with the correct lock tier.

## 6. Watch upstream for Equihash

If `go-quai-startos` gains a fourth algorithm, this package needs the matching bucket and
card. Tracked on the node side too; whichever repo sees it first tells the other.

---

## Not TODO — the verified baseline

Recorded so it is not re-litigated:

- **Backup and restore verified** by uninstall then restore-from-backup: block history intact,
  only live hashrate dipped and recovered.
- **Upgrade in place preserves data.** Same dip-and-recover, nothing lost.
- **Payout misses no longer condemn a workshare.** `findPayouts()` counts failed RPC lookups
  separately and only records a miss when none failed; `reopenOrphans()` backfills at startup.
  Before that fix, three unlucky RPC passes marked a paid workshare orphaned forever.
- **Explorer links go through one constant** — `const EXPLORER = 'https://explorer.qu.ai'`.
  Quai recommends `explorer.qu.ai` over quaiscan, which may be retired; changing hosts is a
  one-line edit by design.
- **Orphans are shown deliberately.** They are the signal that a miner is misconfigured — most
  often a worker name set to a stratum URL instead of a payout address. Hiding them would hide
  the diagnosis.
- **The confirmed-rewards task fires on fresh install only.** Once completed, stop/start cycles
  do not re-ask. Verified.
