/* The five caves
 * @author Jvlaple
 */
importPackage(Packages.server.maps);
importPackage(Packages.net.channel);
importPackage(Packages.tools);

function enter(pi) {
	if (pi.getPlayer().getMapId() == 240050101) {
		var nextMap = 240050102;
		var eim = pi.getPlayer().getEventInstance()
		var target = eim.getMapInstance(nextMap);
		var targetPortal = target.getPortal("sp");
		// only let people through if the eim is ready
		var avail = eim.getProperty("2stageclear");
		if (avail == null) {
			// do nothing; send message to player
			pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6, "Esta porta esta fechada."));
			return false;
		}else {
			pi.getPlayer().changeMap(target, targetPortal);
			return true;
		}
	}
	else if (pi.getPlayer().getMapId() == 240050102) {
		var nextMap = 240050103;
		var eim = pi.getPlayer().getEventInstance()
		var target = eim.getMapInstance(nextMap);
		var targetPortal = target.getPortal("sp");
		// only let people through if the eim is ready
		var avail = eim.getProperty("3stageclear");
		if (avail == null) {
			// do nothing; send message to player
			pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6, "Esta porta esta fechada."));
			return false;
		}else {
			pi.getPlayer().changeMap(target, targetPortal);
			return true;
		}
	}	
	else if (pi.getPlayer().getMapId() == 240050103) {
		var nextMap = 240050104;
		var eim = pi.getPlayer().getEventInstance()
		var target = eim.getMapInstance(nextMap);
		var targetPortal = target.getPortal("sp");
		// only let people through if the eim is ready
		var avail = eim.getProperty("4stageclear");
		if (avail == null) {
			// do nothing; send message to player
			pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6, "Esta porta esta fechada."));
			return false;
		}else {
			pi.getPlayer().changeMap(target, targetPortal);
			return true;
		}
	}
	else if (pi.getPlayer().getMapId() == 240050104) {
		var nextMap = 240050105;
		var eim = pi.getPlayer().getEventInstance()
		var target = eim.getMapInstance(nextMap);
		var targetPortal = target.getPortal("sp");
		// only let people through if the eim is ready
		var avail = eim.getProperty("5stageclear");
		if (avail == null) {
			// do nothing; send message to player
			pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6, "Esta porta esta fechada."));
			return false;
		}else {
			pi.getPlayer().changeMap(target, targetPortal);
			return true;
		}
	}
	else if (pi.getPlayer().getMapId() == 240050105) {
		if (pi.haveItem(4001091, 1) && pi.isLeader()) {
			pi.gainItem(4001091, -1);
			pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6, "As teclas de quebrar o selo de um flash ..."));
			pi.warp(240050100, "st00");
			return true;
		} else {
			pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6, "Horntail\'s esta bloqueando a porta."));
			return false;
		}
	}
	return true;
}
