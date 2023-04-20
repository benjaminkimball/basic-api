# Main commands
start:
	@bin/start

stop:
	@bin/stop

status:
	@bin/status

logs:
	@bin/logs

# Helpful aliases
up: start
down: stop
restart: stop start

# Service-specific commands
psql:
	@bin/psql
